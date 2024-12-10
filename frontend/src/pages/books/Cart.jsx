import React from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price);
  console.log(cartItems);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-16 shadow-lg">
        <div className="px-10">
          {/* Heading */}
          <div className="flex  justify-between mb-5">
            <p className=" font-semibold text-lg text-secondary">
              Shopping Cart
            </p>
            <button className="px-5 py-1 text-white font-semibold hover:opacity-85 bg-red-500 rounded-lg">
              Clear Cart
            </button>
          </div>
          {/* Content */}
          <div>
            <ul className="py-5">
              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  return (
                    <>
                      <li className="flex justify-between items-center shadow-md py-5 mb-5">
                        {/* Left */}
                        <div className="flex space-x-7 text-secondary">
                          <div className="h-24 w-24 flex-shrink-0 rounded-md overflow-hidden border border-gray-400">
                            <img
                              src={getImgUrl(item.coverImage)}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 ">
                              {item.title}
                            </h3>
                            <p className="mb-3">
                              <strong className="text-gray-700">
                                Category:{" "}
                              </strong>{" "}
                              {item.category}
                            </p>
                            <p>
                              <strong className="text-gray-900">Qty: </strong> 1
                            </p>
                          </div>
                        </div>
                        {/* Right */}
                        <span>${item.newPrice}</span>
                      </li>
                    </>
                  );
                })
              ) : (
                <p className="text-center text-gray-500 mb-10">
                  No items in cart
                </p>
              )}
            </ul>
          </div>
          {/* Bottom */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium  text-secondary">Subtotal</h3>
              <p className="text-gray-900">${totalPrice ? totalPrice : 0}</p>
            </div>
            <p className="text-gray-700 mb-3">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold mb-5 hover:opacity-90">
              Checkout
            </button>
            <div className="flex justify-center">
              <Link className="text-blue-700 hover:text-blue-500" to={"/"}>
                Continue Shopping →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
