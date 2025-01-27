import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/image/icon.png";
import { AuthContext } from "../../Authprovider/Authprovider";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

 
  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="navbar lg:px-10 px-3">
      {/* Navbar Start */}
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-4"
          >
            <Link>Home</Link>
            <Link>Shop</Link>
            {user && <Link><FaCartPlus className="text-xl"></FaCartPlus></Link>}
            {user && <Link>Dashboard</Link>}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-2xl text-[#82B440]">
          MediCare Hub <span><img src={icon} className="w-7" alt="" /></span>
        </a>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex gap-5">
        <ul className="menu menu-horizontal px-5 flex items-center gap-6">
          <li><NavLink className="font-semibold">Home</NavLink></li>
          <li><NavLink className="font-semibold">Shop</NavLink></li>
          {user && <NavLink className="font-semibold">Dashboard</NavLink>}
          {user && <NavLink className="font-semibold"><FaCartPlus className="text-xl"></FaCartPlus></NavLink>}

          {/* User Profile Dropdown */}
          <div>
            {user ? (
              <div className="relative">
                <img
                  onClick={handleDropdownToggle}
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full object-cover border-blue-600 border-2 cursor-pointer"
                  alt=""
                />

                {showDropdown && (
                  <div
                    className="absolute top-full flex flex-col w-[150px] -left-20 shadow-2xl p-3 text-sm bg-white mt-3 rounded-2xl z-40"
                    onMouseLeave={handleCloseDropdown}
                  >
                    {user.displayName ? (
                      <div>
                        <p className="mb-1 text-black font-semibold">
                          {user.displayName}
                        </p>
                        <Link to="/dashboard" className="text-black mb-1">Dashboard</Link>
                        <br />
                        <Link to="/profile" className="text-black mb-1">Profile</Link>
                        <br />
                        <button onClick={userLogout} className="text-black">Logout</button>
                      </div>
                    ) : (
                      "Name not found"
                    )}
                  </div>
                )}
              </div>
            ) : (
              <li>
                <NavLink to="/login" className="font-bold">Join Us</NavLink>
              </li>
            )}
          </div>
        </ul>
      </div>

      <div className="lg:hidden flex navbar-end">
        <div>
              {user ? <>

              <div className="relative group">
                <img  onClick={handleDropdownToggle} src={user.photoURL} className="w-10 h-10 rounded-full object-cover border-blue-600 border-2" alt="" />

                {showDropdown && (
                  <div onMouseLeave={handleCloseDropdown} className="absolute top-full flex flex-col w-[150px] -left-20 shadow-2xl p-3 text-sm bg-white mt-3 rounded-2xl z-40">

                  {user.displayName ? <div>
                   <p className="mb-1 text-black font-semibold">{user.displayName}</p>
                   <Link className="text-black mb-1">Dashboard</Link>
                   <br></br>
                   <Link className="text-black mb-1">Profile</Link>
                   <br></br>
                   <button onClick={userLogout} className="text-black">Logout</button>
                  </div>:'Name not found'}
                </div>
                )}
              </div>
              </>:  <li><NavLink to={'/login'} className='font-bold'>Join Us</NavLink></li>}
            </div>
      </div>

    </div>
  );
};

export default Navbar;
