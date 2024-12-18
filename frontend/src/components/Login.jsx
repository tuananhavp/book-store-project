import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const { signInUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      signInUser(data.email, data.password);
      alert("You logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error signing in user", error);
      setMessage("Failed to sign in. Please check your credentials.");
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      alert("You logged in successfully with Google!");
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
      alert("Failed to sign in with Google. Please try again later.");
    }
  };
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center flex-shrink-0">
      <div className="w-full max-w-sm shadow-2xl px-7 py-7">
        <h3 className="text-secondary font-bold font-secondary text-2xl mb-7">
          Please Login
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="email"
              className="text-secondary font-semibold mb-4"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="appearance-none border-2 px-3 py-1 rounded-lg font-medium"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="password"
              className="text-secondary font-semibold mb-4"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="appearance-none border-2 px-3 py-1 rounded-lg font-medium"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 w-full text-white px-10 py-1 font-bold rounded-lg hover:opacity-85 mt-3"
          >
            Log in
          </button>
        </form>
        <p className="text-md font-secondary mt-5 mb-5">
          Haven&apos;t an account yet? Please &nbsp;
          <Link to={"/register"} className="text-blue-400 hover:text-blue-600">
            Register
          </Link>
        </p>
        <div className="bg-gray-900 text-white flex justify-center items-center space-x-4 px-1 py-2 rounded-md hover:opacity-85 mb-5">
          <FcGoogle />
          <button onClick={handleSignInWithGoogle} className="font-bold">
            Sign in with Google
          </button>
        </div>
        <p className="text-sm font-secondary text-gray-500 text-center">
          ©2025 Book Store. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
