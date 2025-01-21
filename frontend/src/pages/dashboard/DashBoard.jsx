import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import {
  IoBook,
  IoTrendingDownOutline,
  IoLogoFirebase,
  IoTimeOutline,
} from "react-icons/io5";
import { FaMugHot } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import axios from "axios";

const DashBoard = () => {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch the API from stats
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/api/stats");
      isLoading(false);
      setData(data.data);
    };
    setTimeout(() => fetchData(), 1 * 1000);
  }, []);
  console.log(data);
  if (loading) return <Loading></Loading>;

  return (
    <>
      <section>
        {/* Top section */}
        <div className="grid grid-cols-2 xl:grid-cols-4 grid-flow-row gap-8 ">
          {/* Products */}
          <div className="bg-white rounded-md shadow-md flex items-center gap-5 sm:px-6 px-5 py-8">
            {/* icon */}
            <div className="px-5 py-5 rounded-full bg-purple-200">
              <IoBook className="text-purple-500 size-5" />
            </div>
            {/* Other info */}
            <div className="flex flex-col">
              <span className="text-lg font-bold">{data.totalProducts}</span>
              <span className="text-sm text-gray-400 font-semibold">
                Products
              </span>
            </div>
          </div>
          {/* Total Sales */}
          <div className="bg-white rounded-md shadow-md flex items-center gap-5 sm:px-6 px-5 py-8">
            {/* icon */}
            <div className="px-5 py-5 rounded-full bg-green-200">
              <BsGraphUpArrow className="text-green-500 size-5" />
            </div>
            {/* Other info */}
            <div className="flex flex-col">
              <span className="text-lg font-bold">${data.totalPrice}</span>
              <span className="text-sm text-gray-400 font-semibold">
                Total Sales
              </span>
            </div>
          </div>
          {/* Trending Books */}
          <div className="bg-white rounded-md shadow-md flex items-center gap-5 sm:px-6 px-5 py-8">
            {/* icon */}
            <div className="px-5 py-5 rounded-full bg-red-200">
              <IoTrendingDownOutline className="text-red-500 size-5" />
            </div>
            {/* Other info */}
            <div className="flex flex-col">
              <span className="text-lg font-bold">{data.trendingBooks}</span>
              <span className="text-sm text-gray-400 font-semibold">
                Trending Books in This Month
              </span>
            </div>
          </div>
          {/* Total Orders */}
          <div className="bg-white rounded-md shadow-md flex items-center gap-5 sm:px-6 px-5 py-8">
            {/* icon */}
            <div className="px-5 py-5 rounded-full bg-blue-200">
              <IoLogoFirebase className="text-blue-500 size-5" />
            </div>
            {/* Other info */}
            <div className="flex flex-col">
              <span className="text-lg font-bold">{data.totalOrders}</span>
              <span className="text-sm text-gray-400 font-semibold">
                Total Orders
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid xl:grid-flow-col grid-flow-row grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 auto-rows-min gap-8 mt-10 ">
          {/* Chart */}
          <div className="h-96 row-span-2 col-span-2 p-10 bg-white rounded-md shadow-md">
            <div className="h-full flex items-center justify-center bg-gray-300 rounded-sm">
              <h1 className="font-bold text-lg text-gray-500 text-center">
                Revenue Chart
              </h1>
            </div>
          </div>
          {/* <div className="bg-white p-5 rounded-md shadow-md">
            <div className="bg-gray-300 h-full shadow-md"></div>
          </div>
          <div className="bg-white p-5 rounded-md shadow-md">
            <div className="bg-gray-300 h-full "></div>
          </div> */}
          {/* Products */}
          <div className="bg-white rounded-md shadow-md flex items-center gap-5 sm:px-6 px-5 py-8">
            {/* icon */}
            <div className="px-5 py-5 rounded-full bg-yellow-200">
              <IoTimeOutline className="text-yellow-500 size-5" />
            </div>
            {/* Other info */}
            <div className="flex flex-col">
              <span className="text-lg font-bold">366</span>
              <span className="text-sm text-gray-400 font-semibold">
                Web Visited (Lasted Day)
              </span>
            </div>
          </div>
          {/* Total Sales */}
          <div className="bg-white rounded-md shadow-md flex items-center gap-5 sm:px-6 px-5 py-8">
            {/* icon */}
            <div className="px-5 py-5 rounded-full bg-teal-200">
              <FaMugHot className="text-teal-500 size-5" />
            </div>
            {/* Other info */}
            <div className="flex flex-col">
              <span className="text-lg font-bold">{data.totalOrders}</span>
              <span className="text-sm text-gray-400 font-semibold">
                Order Left
              </span>
            </div>
          </div>
          {/* Users Order */}
          <div className="col-span-2 2xl:col-span-2 row-span-full bg-white rounded-md p-5 shadow-md">
            <div>
              {/* Users Order Header */}
              <div className="gap-1 lg:flex justify-between items-center p-3">
                <div className="pr-6">
                  <span className="font-bold ">User by average order</span>
                </div>
                <div>
                  <select
                    name="sort"
                    id="sort"
                    className="font-bold text-sm focus:outline-none"
                  >
                    <option
                      className="text-gray-400 font-bold text-sm"
                      name="ascentding"
                      id=""
                    >
                      A-Z
                    </option>
                    <option
                      className="text-gray-400 font-bold text-sm"
                      name="desending"
                      id=""
                    >
                      Z-A
                    </option>
                  </select>
                </div>
              </div>
              {/* Users Order Content */}
              <div className="h-96 rounded-sm">
                <ul className="h-full overflow-y-auto p-3">
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                          alt=""
                        />
                        <span className="font-bold text-sm">Emma Swinton</span>
                      </div>
                      <span className="font-bold text-sm">8.2</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1"
                          alt=""
                        />
                        <span className="font-bold text-sm">John Nguyen</span>
                      </div>
                      <span className="font-bold text-sm">7.6</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="object-cover rounded-full size-11"
                          src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933"
                          alt=""
                        />
                        <span className="font-bold text-sm">Anthony Devia</span>
                      </div>
                      <span className="font-bold text-sm">9.1</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Other Chart */}
        <div className=" bg-white h-96 p-5 rounded-md mt-7 shadow-md">
          <div className="bg-gray-300 h-full flex items-center justify-center">
            <span className="text-center font-bold text-gray-500 text-xl">
              Other Chart
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
