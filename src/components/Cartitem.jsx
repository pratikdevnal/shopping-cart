import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

const productImageStyle =
  "object-contain w-full h-48 md:h-40 rounded-md transition-transform duration-300 hover:shadow-md";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart", {
      position: "top-center",
    });
  };

  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-md mb-4">
      <div className="w-full h-48 md:h-40">
        <img src={item.image} alt={item.title} className={productImageStyle} />
      </div>

      <div className="mt-4 flex flex-col items-center md:items-start">
        <div className="md:ml-4 text-center md:text-left">
          <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>

        <div className="flex items-center justify-between mt-4 w-full">
          <p className="text-lg font-bold text-green-600">${item.price}</p>
          <div
            onClick={removeFromCart}
            className="bg-red-500 group hover:bg-red-600 transition-transform duration-300 cursor-pointer rounded-full p-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-white"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
