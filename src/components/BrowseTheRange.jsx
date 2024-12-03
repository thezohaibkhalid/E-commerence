import React from "react";
import Dining from "../assets/Dining.png";
import Living from "../assets/living-room.png";
import Bedroom from "../assets/Bedroom.png";

export default function BrowseTheRange() {
  return (
    <div>
      {/* Browse the range */}
      <div className="w-full py-14 text-center">
        <h1 className="text-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold">
          Browse The Range
        </h1>
        <p className="text-thin font-normal text-gray-500 lg:text-lg md:text-lg text-sm pt-2 max-w-[90%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Types */}

      <div className="w-full flex justify-center">
        <div className=" w-[90%] flex lg:flex-row md:flex-row   flex-col gap-8 justify-center mx-auto text-center ">
          <div className="flex flex-col items-center">
            <img
              src={Dining}
              alt="Dining"
            />
            <span className="mt-2 font-semibold lg:text-2xl md:text-2xl text-xl text-gray-800">Dining</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Living}
              alt="Living"
            />
            <span className="mt-2 font-semibold lg:text-2xl md:text-2xl text-xl text-gray-800">Living</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Bedroom}
              alt="Bedroom"
            />
            <span className="mt-2 font-semibold lg:text-2xl md:text-2xl text-xl  text-gray-800">Bedroom</span>
          </div>
        </div>
      </div>
    </div>
  );
}
