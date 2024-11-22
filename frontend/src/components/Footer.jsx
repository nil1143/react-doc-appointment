import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-center">
        {/* ----- Left Section ----- */}
        <div className="flex">
          <img src={assets.logo} className="mb-5 w-20" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* ----- Mid Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ----- Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul>
            <li>+0-000-000-000</li>
            <li>user@gmail.com</li>
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