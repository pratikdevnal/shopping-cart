import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
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
    toast.success(" Item removed from cart", {
      position: "top-center",
    });
  };
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="product" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>

      <div className="bg-red-500">
        {cart.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default Product;
