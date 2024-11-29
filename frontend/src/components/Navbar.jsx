import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-16 cursor-pointer"
        src={assets.logo}
        alt="nav-logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li><NavLink to="/">
          <p className="py-1">HOME</p>
          <hr className="border-none outline-none h-0.5  bg-primary w-3/5 m-auto hidden" />
        </NavLink></li>
        <li><NavLink to="/doctors">
          <p className="py-1">ALL DOCTORS</p>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink></li>
        <li><NavLink to="/about">
          <p className="py-1">ABOUT</p>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink></li>
        <li><NavLink to="contact">
          <p className="py-1">CONTACT</p>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink></li>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img width='32px' height='32px' className="rounded-full" src={assets.profile_pic} alt="profilepic"/>
            <img width='10px' height='10px' src={assets.dropdown_icon} alt='dropdown' />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-fifth rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="menu-icon"
        />
        {/* ----- MOBILE MENU ------ */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-[70px]" src={assets.logo} alt="assets-logo" />
            <img
              width='28px' height='28px'
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="cross-icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <li><NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block ">HOME</p>
            </NavLink></li>
            <li><NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block ">ALL DOCTORS</p>
            </NavLink></li>
            <li><NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block ">ABOUT</p>
            </NavLink></li>
            <li><NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block ">CONTACT</p>
            </NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
