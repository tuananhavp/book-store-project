import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  IoFolder,
  IoBarChart,
  IoApps,
  IoAnalyticsSharp,
  IoSettingsOutline,
  IoSearchSharp,
  IoNotificationsOutline,
  IoLogOutOutline,
  IoAdd,
} from "react-icons/io5";
import avatar from "../../assets/avatar.png";
import { FaPencil } from "react-icons/fa6";
const DashBoardLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <>
      <div className="flex flex-wrap">
        {/* Side Bar */}
        <aside className="min-h-screen flex flex-col justify-between bg-gray-800">
          {/* Navigation */}
          <div>
            <div className="flex flex-grow justify-center items-center py-7 hover:bg-purple-700">
              <Link to={"/dashboard"}>
                <img className="size-6" src="/fav-icon.png" alt="logo-free" />
              </Link>
            </div>
            {/* Features */}
            <ul className="px-2 pt-2">
              <li className="flex justify-center py-4">
                <Link to={"/dashboard"}>
                  <div className="py-3 px-5 rounded-md hover:bg-slate-200 group">
                    <IoFolder className="text-gray-400 size-5 group-hover:text-gray-900" />
                  </div>
                </Link>
              </li>
              <li className="flex justify-center py-4">
                <Link to={"/dashboard/add-book"}>
                  <div className="py-3 px-5 rounded-md hover:bg-slate-200 group">
                    <IoBarChart className="text-gray-400 size-5 group-hover:text-gray-900" />
                  </div>
                </Link>
              </li>
              <li className="flex justify-center py-4">
                <Link to={"/dashboard/edit-book"}>
                  <div className="py-3 px-5 rounded-md hover:bg-slate-200 group">
                    <IoApps className="text-gray-400 size-5 group-hover:text-gray-900" />
                  </div>
                </Link>
              </li>
              <li className="flex justify-center py-4">
                <Link to={"/dashboard/manage-books"}>
                  <div className="py-3 px-5 rounded-md hover:bg-slate-200 group">
                    <IoAnalyticsSharp className="text-gray-400 size-5 group-hover:text-gray-900" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* Setting */}
          <div>
            <div className="flex justify-center py-5">
              <div className="py-3 px-3 rounded-md hover:bg-slate-200 group">
                <Link to={"/dashboard"}>
                  <IoSettingsOutline className="text-gray-400 size-5 group-hover:text-gray-900" />
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Header */}
          <header className="bg-white flex flex-nowrap items-center justify-between py-3">
            <div className="px-10 ml-8 py-34 flex space-x-5 items-center">
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
                <IoLogOutOutline
                  onClick={handleLogout}
                  className="size-6  hover:text-gray-600"
                />
              </div>
            </div>
          </header>
          <main className="bg-gray-100 min-h-screen p-12">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-blue-950 text-4xl">
                  Dashboard
                </span>
                <span className="text-sm font-bold text-gray-400">
                  Book Store Inventory
                </span>
              </div>
              <div className="flex gap-3">
                {/* Manage Book */}
                <Link
                  className=" flex items-center justify-between bg-purple-700 text-white gap-3 border-2 border-solid border-purple-700 px-5  py-3 rounded-xl hover:opacity-85"
                  to={"/dashboard/add-book"}
                >
                  <IoAdd className="size-5" />
                  <span className="font-semibold">Add New Book</span>
                </Link>
                {/* Add New Book */}
                <Link
                  className=" flex items-center justify-between gap-3 border-2 border-solid border-purple-700 px-5  py-3 rounded-xl group hover:bg-purple-700 hover:opacity-85"
                  to={"/dashboard/add-book"}
                >
                  <FaPencil className="size-5 text-purple-700 group-hover:text-white" />
                  <span className="font-semibold text-purple-700 group-hover:text-white">
                    Manage Books
                  </span>
                </Link>
              </div>
            </div>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
