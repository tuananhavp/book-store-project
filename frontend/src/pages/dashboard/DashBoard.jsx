import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { IoBook, IoTrendingDownOutline, IoLogoFirebase } from "react-icons/io5";
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
        <div className="grid grid-flow-col grid-cols-4 grid-rows-3 lg:grid-rows-3 gap-8 mt-10 bge ">
          {/* Chart */}
          <div className="h-96 row-span-2 col-span-2 p-10 bg-white rounded-md shadow-md">
            <div className="h-full flex items-center justify-center bg-gray-300 rounded-sm">
              <h1 className="font-bold text-lg text-gray-500 text-center">
                Revenue Chart
              </h1>
            </div>
          </div>
          <div className="bg-white p-5 rounded-md">
            <div className="bg-gray-300 h-full "></div>
          </div>
          <div className="bg-white p-5 rounded-md">
            <div className="bg-gray-300 h-full "></div>
          </div>
          {/* Users Order */}
          <div className="col-span-2 2xl:col-span-1 row-span-full bg-white rounded-md p-5">
            <div className="h-full flex flex-col">
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
                    <option
                      className="text-gray-400 font-bold text-sm"
                      name="age"
                      id=""
                    >
                      Age
                    </option>
                  </select>
                </div>
              </div>
              {/* Users Order Content */}
              <div className="flex items-center flex-grow justify-center bg-gray-300 rounded-sm">
                <h1 className="font-bold text-lg text-gray-500 text-center">
                  Users Order
                </h1>
              </div>
            </div>
          </div>
          {/* Other Chart */}
          <div className="bg-white row-span-full p-5 rounded-md">
            <div className="bg-gray-300 h-full "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
