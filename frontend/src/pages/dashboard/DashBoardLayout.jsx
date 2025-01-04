import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  IoFolder,
  IoBarChart,
  IoApps,
  IoAnalyticsSharp,
  IoSettingsOutline,
  IoSearchSharp,
  IoNotificationsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import avatar from "../../assets/avatar.png";
const DashBoardLayout = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {/* Side Bar */}
        <aside className="min-h-screen flex flex-col justify-between bg-gray-800">
          {/* Navigation */}
          <div>
            <div className="flex justify-center items-center py-7 hover:bg-purple-700">
              <img className="size-7" src="/fav-icon.png" alt="logo-free" />
            </div>
            <ul className="px-4 pt-2">
              <li className="flex justify-center py-5">
                <div className="py-3 px-3 rounded-md hover:bg-slate-200 group">
                  <Link to={"/dashboard"}>
                    <IoFolder className="text-gray-400 size-7 group-hover:text-gray-900" />
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="px-4 pt-2">
              <li className="flex justify-center py-5">
                <div className="py-3 px-3 rounded-md hover:bg-slate-200 group">
                  <Link to={"/dashboard"}>
                    <IoBarChart className="text-gray-400 size-7 group-hover:text-gray-900" />
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="px-4 pt-2">
              <li className="flex justify-center py-5">
                <div className="py-3 px-3 rounded-md hover:bg-slate-200 group">
                  <Link to={"/dashboard"}>
                    <IoApps className="text-gray-400 size-7 group-hover:text-gray-900" />
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="px-4 pt-2">
              <li className="flex justify-center py-5">
                <div className="py-3 px-3 rounded-md hover:bg-slate-200 group">
                  <Link to={"/dashboard"}>
                    <IoAnalyticsSharp className="text-gray-400 size-7 group-hover:text-gray-900" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          {/* Setting */}
          <div>
            <div className="flex justify-center py-5">
              <div className="py-3 px-3 rounded-md hover:bg-slate-200 group">
                <Link to={"/dashboard"}>
                  <IoSettingsOutline className="text-gray-400 size-7 group-hover:text-gray-900" />
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Header */}
          <header className="bg-white flex flex-nowrap items-center justify-between">
            <div className="px-10 ml-8 py-6 flex space-x-5 items-center text-lg">
              <IoSearchSharp className="size-5" />
              <input
                className="focus:outline-none font-primary"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="flex space-x-10 mr-14">
              {/* Account Info */}
              <div className="flex items-center space-x-3 ">
                <div>
                  <h3 className="font-bold text-secondary">Ngô Tuấn Anh</h3>
                  <span className="text-sm line-clamp-1">Admin</span>
                </div>
                <img src={avatar} className="object-cover size-10" alt="" />
              </div>
              {/* Logout and NotiNoti */}
              <div className="flex items-center justify-between gap-4">
                <IoNotificationsOutline className="size-6 hover:text-gray-600" />
                <IoLogOutOutline className="size-6  hover:text-gray-600" />
              </div>
            </div>
          </header>
          <div className="bg-gray-100 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
