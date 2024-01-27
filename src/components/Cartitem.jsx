import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
function Cartitem({ item, itemIndex }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error(" Item removed from cart", {
      position: "top-center",
    });
  };
  return (
    <div>
      <div>
        <div>
          <img src="{item.image}" alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
