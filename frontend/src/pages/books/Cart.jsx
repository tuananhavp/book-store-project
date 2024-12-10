import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((total, item) => total + item.newPrice, 0)
    .toFixed(2);

  const handleRemoveFromCart = (book) => {
    // Implement logic to remove item from cart
    dispatch(removeFromCart(book));
  };
  const handleClearFromCart = (book) => {
    dispatch(clearCart(book));
  };
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
            <button
              onClick={() => {
                handleClearFromCart();
              }}
              className="px-5 py-0 text-white font-semibold hover:opacity-85 bg-red-500 rounded-lg"
            >
              Clear
            </button>
          </div>
          {/* Content */}
          <div>
            <ul className="py-5">
              {cartItems.length > 0 ? (
                cartItems.map((item) => {
                  return (
                    <>
                      <li className="flex sm:flex-row flex-col gap-5 justify-between sm:items-center items-baseline shadow-md py-5 mb-5 px-5">
                        {/* Left */}
                        <div className="flex space-x-7 text-secondary pr-3">
                          <div className="h-24 w-24 sm:flex-shrink-0 rounded-md overflow-hidden border border-gray-400">
                            <img
                              src={getImgUrl(item.coverImage)}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-20 md:w-full">
                              {item.title}
                            </h3>
                            <p className="mb-3">
                              <strong className="text-gray-700  text-sm">
                                Category:{" "}
                              </strong>{" "}
                              {item.category}
                            </p>
                            <p>
                              <strong className="text-gray-900 text-sm">
                                Qty:{" "}
                              </strong>{" "}
                              1
                            </p>
                          </div>
                        </div>
                        {/* Right */}
                        <div className="flex flex-col justify-between items-center gap-7">
                          <span>${item.newPrice}</span>
                          <button
                            onClick={() => {
                              handleRemoveFromCart(item);
                            }}
                            className="text-purple-500 text-sm hover:text-purple-400"
                          >
                            Remove
                          </button>
                        </div>
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
            <div className="flex justify-between mb-1">
              <div className="pr-3">
                <h3 className="font-medium  text-secondary">Subtotal</h3>
                <p className="text-gray-700 mb-3">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
              <p className="text-gray-900">${totalPrice ? totalPrice : 0}</p>
            </div>

            <Link to={"/checkout"}>
              <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold mb-5 hover:opacity-90">
                Checkout
              </button>
            </Link>
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
