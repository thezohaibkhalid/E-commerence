import React from "react";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative px-4 sm:px-8 lg:px-20 "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Left Side */}
      <div className="block w-1/3"></div>

      {/* Right Side */}
      <div
        className=" lg:max-w-[643px] md:w-[500px] sm:w-[400px] w-[350px]   bg-[#FFF6E8] p-8 shadow-lg rounded-md flex flex-col justify-between"
      >
        <div className="pt-14">
          <h5 className="text-md font-thin text-gray-900">
            New Arrival
          </h5>
          <h1 className="lg:text-[52px] md:text-[40px] sm:text-[36px] text-2xl font-bold text-yellow-600 lg:leading-[3.5rem] md:leading-10 sm:leading-9 leading-7 mt-4">
            Discover Our <br /> New Collection
          </h1>
        </div>

        <p className="text-gray-600 lg:text-base md:text-base sm:text-base text-sm mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        <button className="bg-[#B88E2F] text-base md:w-[150px] sm:w-[120px] w-[100px] py-2 md:py-6 sm:py-4 text-white lg:w-[222px] lg:px-6 lg:py-8 font-bold mt-12 hover:bg-[#987947] transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}
