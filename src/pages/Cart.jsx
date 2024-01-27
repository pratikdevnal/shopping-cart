import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="mt-16">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="md:w-1/4 mt-4 md:mt-0 md:ml-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="font-bold text-lg mb-4">Order Summary</div>
              <p>Total Items: {cart.length}</p>
              <p>Total Amount: ${totalAmount.toFixed(2)}</p>
              <Link to="/checkout">
                <button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 w-full mt-4">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
