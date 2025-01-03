import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../utils/getBaseUrl";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Handle form submission
    try {
      console.log(data);
      const response = await axios.post(`${getBaseUrl()}/api/admin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const auth = response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has been expired!, Please login again.");
          navigate("/");
        }, 60 * 1000);
      }
      console.log(auth);
      setMessage("");
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Failed to login");
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-center items-center px-10 min-h-screen">
      <div className="shadow-lg px-10 py-10">
        <h2 className="font-secondary font-bold text-secondary text-xl">
          Admin Dashboard Login
        </h2>
        {/* Form Validation */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* UserName */}
          <div className="pt-5">
            <label className="font-bold" htmlFor="username">
              User Name
            </label>
            <input
              {...register("username", { required: true })}
              className="px-3 py-1 min-w-full mt-3 focus:outline-none rounded-lg border-2"
              placeholder="User Name"
              type="text"
              name="username"
              id="username"
            />
          </div>
          {/* PassWord */}
          <div className="pt-5">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="px-3 py-1 min-w-full mt-3 focus:outline-none rounded-lg border-2"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <div className="py-2">
              {message && (
                <p className="text-red-500 text-ml italic px-2 py-1">
                  {message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full text-white py-2 font-bold rounded-lg hover:opacity-85 mt-2"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="text-sm font-secondary text-gray-500 text-center mt-6">
          ©2025 Book Store. All right reserved
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
