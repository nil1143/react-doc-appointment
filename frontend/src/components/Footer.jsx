import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-center">
        {/* ----- Left Section ----- */}
        <div className="flex-1">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul>
            <li>+0-000-000-000</li>
            <li>user@gmail.com</li>
          </ul>
        </div>
        {/* ----- Mid Section ----- */}
        
        {/* ----- Right Section */}

        <div className="flex items-center">
          <img
            width="80px"
            height="80px"
            src={assets.logo}
            className="mb-5"
            alt="logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 items-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Copyright text */}
      <div>
        <br />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ <b>nil1143</b> - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
