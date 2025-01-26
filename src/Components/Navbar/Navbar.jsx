import React from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/image/icon.png"

const Navbar = () => {
  return (
    <div className="navbar lg:px-10 px-3">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
            <Link>Home</Link>
            <Link>Shope</Link>
            <Link>About Us</Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-2xl text-[#82B440] font-serif">MediCare Hub <span><img src={icon} className="w-7" alt="" /></span></a>
      </div>

      <div className="navbar-end hidden lg:flex gap-5">
        <ul className="menu menu-horizontal px-1">
            <li><NavLink className='font-bold '>Home</NavLink></li>
            <li> <NavLink className='font-bold '>Shope</NavLink></li>
            <li><NavLink className='font-bold '>About Us</NavLink></li>

            <li><NavLink to={'/login'} className='font-bold'>Join Us</NavLink></li>
        </ul>
      </div>
        <div className="lg:hidden flex navbar-end">
            <Link to={'/signup'}><button className="btn bg-[#82B440] font-semibold text-white">Join us</button></Link>
        </div>
    </div>
  );
};

export default Navbar;
