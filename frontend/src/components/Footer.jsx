import logo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="mt-48 bg-gray-800 text-white">
      <div className="py-10 ">
        {/* Top side */}
        <div className="flex flex-col lg:flex-row justify-between md:items-center sm:px-28 px-8">
          {/* Left Side */}
          <div className="pr-5">
            <img className="size-24 flex-shrink-0" src={logo} alt="" />
            <ul className="flex flex-col md:flex-row gap-10 mt-8 font-secondary font-semibold text-lg ">
              <li>
                <a className="hover:text-blue-600" href="">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="">
                  Gallery
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="">
                  Team
                </a>
              </li>
            </ul>
          </div>
          {/* Right Side */}
          <div className="sm:mt-5 mt-10">
            <p className="font-secondary ">
              Subscribe to stay tuned for new product and latest updates.
            </p>
            <p className="font-secondary ">Let’s do it!</p>
            <div className="">
              <input
                placeholder="Enter your email address"
                type="email"
                className=" px-8 lg:w-3/5 w-1/2 py-[6px] pb-[7px] font-bold mt-12 text-black rounded-md"
              />
              <button className="btn-primary px-12 py-2 sm:w-2/5 1/2">
                Subcribe
              </button>
            </div>
          </div>
        </div>
        {/* Bottom side */}
        <div className="border-t-2 border-gray-700 mt-20 flex flex-col lg:flex-row justify-between md:items-center sm:px-28">
          {/* Left Side */}
          <ul className="flex flex-col md:flex-row gap-10 mt-8 font-secondary font-semibold text-lg ">
            <li>
              <a className="hover:text-blue-600" href="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="">
                Sales and Refunds
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600" href="">
                Legal
              </a>
            </li>
          </ul>
          {/* Right Side */}
          <div className="flex gap-16 mt-6 mr-20">
            <a href="https://www.facebook.com/anh2xx/">
              <FaFacebook className="size-5" />
            </a>
            <a href="https://www.facebook.com/anh2xx/">
              <FaInstagram className="size-5" />
            </a>
            <a href="https://www.facebook.com/anh2xx/">
              <FaXTwitter className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
