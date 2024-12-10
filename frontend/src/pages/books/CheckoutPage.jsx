import { useSelector } from "react-redux";

const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems
    .reduce((total, item) => total + item.newPrice, 0)
    .toFixed(2);

  return (
    <section className="w-full bg-gray-100 min-h-dvh">
      <div className="max-w-6xl mx-auto pt-40">
        {/* Top side */}
        <div>
          <h3 className="font-semibold text-xl text-gray-600 mb-3">
            Cash On Delevary
          </h3>
          <p className="text-gray-400 mb-3 ">Total Price: ${totalPrice}</p>
          <p className="text-gray-400 mb-3">Items: {cartItems.length}</p>
        </div>
        {/* Bottom side */}
        <div className="min-h-screen bg-white">
          <div className="px-10 pt-20 flex justify-between">
            {/* Left Side */}
            <div>
              <h3 className="font-semibold text-lg text-gray-500 mb-3">
                Personal Details
              </h3>
              <p className="text-gray-500">Please fill out all the fields</p>
            </div>
            {/* Right Side */}
            <div className="w-2/3">
              <form action="">
                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Email Address */}
                <div className="mb-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Phone Number */}
                <div className="mb-5">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Address/Street and City */}
                <div className="flex gap-4 justify-between mb-6">
                  <div className="w-2/3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      type="tel"
                      id="city"
                      name="city"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                </div>
                {/* Country / State / Zipcode*/}
                <div className="flex gap-4 justify-between">
                  <div className="w-3/4">
                    <label htmlFor="country">Country / region</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div className="w-3/4">
                    <label htmlFor="state">State / province</label>
                    <input
                      type="tel"
                      id="state"
                      name="state"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      type="tel"
                      id="zipcode"
                      name="zipcode"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                </div>
                {/* Checkbox */}
                <div className="flex gap-3 mt-8">
                  <input type="checkbox" />
                  <p>
                    I am agree to the &nbsp;
                    <a href="" className="text-blue-400 underline">
                      Terms & Conditions &nbsp;
                    </a>
                    and &nbsp;
                    <a href="" className="text-blue-400 underline">
                      Shopping Policy
                    </a>
                  </p>
                </div>
                {/* Button */}
                <button className=" mt-10 px-3 py-2 font-secondary font-bold rounded-lg bg-blue-500 hover:opcity-85 text-white ">
                  Place an Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
