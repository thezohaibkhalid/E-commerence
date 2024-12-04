import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-10">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold mb-6">
        Share your setup with <span className="text-gray-700">#FuniroFurniture</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Top Left Large Image */}
        <div className="col-span-5 row-span-2">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Gallery Item 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Top Middle Images */}
        <div className="col-span-4 row-span-1">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Gallery Item 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-3 row-span-1">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Gallery Item 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bottom Left Images */}
        <div className="col-span-2 row-span-1">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Gallery Item 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Gallery Item 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Center Large Image */}
        <div className="col-span-4 row-span-2">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Gallery Item 6"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Middle Image */}
        <div className="col-span-3 row-span-2">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Gallery Item 7"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
