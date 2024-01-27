import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

function Product({ post }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success(" Item added to cart", {
      position: "top-center",
    });
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error(" Item removed from cart", {
      position: "top-center",
    });
  };
  const cart = useSelector((state) => state.cart);

  const truncatedTitle = truncateText(post.title, 40); // Adjust the number of characters as needed
  const truncatedDescription = truncateText(post.description, 40); // Adjust the number of characters as needed

  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,0,0,0.24) 0px 3px 8px] hover:shadow-lg gap-3 p-4 mt-10 ml-5 rounded-xl bg-white">
      <div>
        <h1 className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg text-left">
          {truncatedTitle}
        </h1>
      </div>
      <div>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {truncatedDescription}
        </h1>
      </div>
      <div className="h-[180px]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-contain rounded-md"
        />
      </div>
      <div className="flex items-center justify-between w-full mt-5">
        <p className="text-green-600 font-semibold">${post.price}</p>
        <button
          onClick={
            cart.some((p) => p.id === post.id) ? removeFromCart : addToCart
          }
          className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
        >
          {cart.some((p) => p.id === post.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
