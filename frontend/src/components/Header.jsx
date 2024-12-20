import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* ---------- Left Side ---------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight md:leading-tight lg:leading-tight introText">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-bold introText">
          <img width='112px' height='112px' src={assets.group_profiles} alt="alt" />
          <p className="">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-fourth px-8 py-3 rounded-fuil text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img width='12px' height='12px' src={assets.arrow_icon} alt="arrow-icon" />
        </a>
      </div>
      {/* ---------- Right Side ---------- */}
      <div className="md:w-1/2 relative">
        <img width='640' height='480'
          className="md:absolute bottom-0 rounded-lg"
          src={assets.header_img} alt='bannerimg'
        />
      </div>
    </div>
  );
};

export default Header;
