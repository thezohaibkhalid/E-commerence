import React from 'react'

export default function Footer() {
  return (
    <footer className=" py-12 px-6 border-t border-t-gray-300 mt-12">
    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-800">
      {/* Company Info */}
      <div>
        <h2 className="text-lg font-bold lg:text-2xl md:text-2xl">Funiro.</h2>
        <p className=" text-gray-400 font-thin text-base mt-12">
          400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
        </p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-gray-500 font-semibold uppercase text-sm mb-3">
          Links
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Help Section */}
      <div>
        <h3 className="text-gray-500 font-semibold uppercase text-sm mb-3">
          Help
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-black transition">
              Payment Options
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Returns
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black transition">
              Privacy Policies
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="text-gray-500 font-semibold uppercase text-sm mb-3">
          Newsletter
        </h3>
        <form className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 py-2 border-b border-gray-600 placeholder:text-gray-400  focus:outline-none  font-medium text-medium text-xs"
          />
          <button
            type="submit"
            className=" uppercase px-4 py-2 text-xs font-medium text-black border-b border-black  hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-gray-200 w-[80%] mx-auto mt-6 pt-[35px]  text-base font-normal text-black">
      © 2023 Funiro. All rights reserved
    </div>
  </footer>
  )
}
