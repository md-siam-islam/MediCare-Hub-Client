import React from 'react';
import icon from '../../assets/image/icon.png'
import { Link } from 'react-router-dom';

const Signup = () => {

    const handlesignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        const userData = {
            name,email,photo,password
        }
        console.log(userData);

        
    }
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
        <div className="flex items-center gap-4">
            <a className=" text-3xl md:text-2xl text-[#82B440] font-bold">MediCare Hub</a>
            <span><img src={icon} className="w-7" alt="" /></span>
        </div>
      <div className="card w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handlesignup} className="space-y-4">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
               User Name
              </span>
            </label>
            
            <input
              type="text"
              name='name'
              placeholder="Enter your User Name"
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Photo URL
              </span>
            </label>
            
            <input
              type="text"
              name='photo'
              placeholder="Enter Your Photo Url"
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Email
              </span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="input input-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button className="btn w-full bg-[#82B840] text-white font-bold py-2 px-4 rounded-lg">
              Sign Up
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-[#82B840] hover:underline">
            <Link to={'/login'}>Login</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
