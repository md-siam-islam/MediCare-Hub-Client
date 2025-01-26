import React from "react";
import icon from "../../assets/image/icon.png";

const Login = () => {

    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password);
    }
  return (
    <div className="flex items-center justify-center flex-col min-h-screen  py-6 w-10/12 mx-auto">
      <div className="flex items-center gap-4 ">
        <a className="text-3xl md:text-2xl text-[#82B440] font-bold">
          MediCare Hub
        </a>
        <span>
          <img src={icon} className="w-7" alt="icon" />
        </span>
      </div>

      <h1 className="text-xl text-center mb-3">Welcome Back ! 🫡</h1>

      <div className="flex flex-col items-center gap-6 w-full lg:w-1/2 px-4 py-8 ">
       
        <button className="btn w-full py-2 px-4 rounded-lg flex items-center justify-center gap-3">
          <img
            className="h-6"
            src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png"
            alt="Google icon"
          />
          Sign in with Google
        </button>

        <div className="divider text-gray-500">OR</div>

      <form onSubmit={handleSignin} className="w-full space-y-5">
          <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-gray-700">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-gray-700">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6 w-full">
          <button className="btn w-full bg-[#82B440] text-white py-2 px-4 rounded-lg">
            Log In
          </button>
        </div>
      </form>
      </div>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
