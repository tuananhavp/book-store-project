import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Orders",
      href: "/order",
    },
    {
      name: "Cart Page",
      href: "/cart",
    },
    {
      name: "Check Out",
      href: "/checkout",
    },
  ];
  const currentUser = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="max-w-[85%] py-6 mx-auto">
      <nav className="flex justify-between items-center space-x-9">
        {/* Left side */}
        <div className="flex justify-between items-center md:gap-20 gap-4">
          <Link to={"/"}>
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* Search bar */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchSharp className="absolute inline-block size-5 left-3 inset-2" />
            <input
              className=" bg-bg w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              type="text"
              placeholder="What are you looking for?"
            ></input>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex justify-between items-center md:space-x-3 space-x-2">
          <div className="flex items-center">
            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  <img
                    src={avatarImg}
                    alt="avatar"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-10 -left-14 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => {
                        return (
                          <Link
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                            key={item.name}
                            to={item.href}
                          >
                            <li>{item.name}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to={"/login"}>
                <GoPerson className="size-6" />
              </Link>
            )}
          </div>

          <div className="hidden md:block">
            <CiHeart className="size-6" />
          </div>
          <Link
            to={"/cart"}
            className="md:flex hidden items-center bg-primary rounded-lg sm:px-6 px-2 p-1 space-x-3 hover:opacity-85  group"
          >
            <AiOutlineShoppingCart className="text-black size-6 group-hover:text-black" />
            {cartItems.length > 0 ? (
              <span className="text-black font-semibold group-hover:text-black">
                {cartItems.length}{" "}
              </span>
            ) : (
              <span className="text-black font-semibold group-hover:text-black">
                Basket
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
