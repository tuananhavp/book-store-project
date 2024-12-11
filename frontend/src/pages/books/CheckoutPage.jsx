import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { use, useState } from "react";

const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems
    .reduce((total, item) => total + item.newPrice, 0)
    .toFixed(2);

  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newOrder = {
      name: data.name,
      email: data.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };
    console.log(newOrder);
  };

  return (
    <section className="w-full sm:bg-gray-100 bg-white min-h-dvh">
      <div className="max-w-6xl mx-auto pt-20 sm:px-10 py-20">
        {/* Top side */}
        <div className="px-5">
          <h3 className="font-semibold text-xl text-gray-600 mb-3">
            Cash On Delevary
          </h3>
          <p className="text-gray-400 mb-3 ">Total Price: ${totalPrice}</p>
          <p className="text-gray-400 mb-3">Items: {cartItems.length}</p>
        </div>
        {/* Bottom side */}
        <div className=" pb-20 bg-white">
          <div className="sm:px-10 px-5 pt-20 sm:flex justify-between">
            {/* Left Side */}
            <div className="pr-3">
              <h3 className="font-semibold text-lg text-gray-500 mb-3">
                Personal Details
              </h3>
              <p className="text-gray-500">Please fill out all the fields</p>
            </div>
            {/* Right Side */}
            <div className="sm:w-2/3 w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="name">Full Name</label>
                  <input
                    {...register("name", { required: true })}
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
                    {...register("email", { required: true })}
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
                    {...register("phone", { required: true })}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Address/Street and City */}
                <div className="lg:flex gap-4 justify-between mb-6">
                  <div className="xl:w-2/3 w-full">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      {...register("address", { required: true })}
                      type="text"
                      id="address"
                      name="address"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      id="city"
                      name="city"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                </div>
                {/* Country / State / Zipcode*/}
                <div className="lg:flex gap-4 justify-between ">
                  <div className="xl:w-3/4 w-full">
                    <label htmlFor="country">Country / region</label>
                    <input
                      {...register("country", { required: true })}
                      type="text"
                      id="country"
                      name="country"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div className="2xl:w-3/4 w-full">
                    <label htmlFor="state">State / province</label>
                    <input
                      {...register("state", { required: true })}
                      type="text"
                      id="state"
                      name="state"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      {...register("zipcode", { required: true })}
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      className="w-full border-2 p-2 mt-3 bg-gray-100 focus:outline-none"
                    />
                  </div>
                </div>
                {/* Checkbox */}
                <div className="flex gap-3 mt-8">
                  <input
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                    }}
                    type="checkbox"
                  />
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
                <button
                  disabled={!isChecked}
                  className=" mt-10 px-3 py-2 font-secondary font-bold rounded-lg bg-blue-500 hover:opcity-85 text-white "
                >
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
