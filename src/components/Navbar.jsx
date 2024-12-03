import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BsPersonExclamation, BsHeart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { HiX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  
  };

  return (
    <>
      <header className="bg-white shadow fixed w-full top-0 z-20 transition-all duration-300 ">
        <div className="w-[90%] mx-auto flex justify-between h-[100px] items-center">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-10 transition-transform hover:scale-105" />
          </div>

          {/* Hamburger Icon*/}
          <div
            className="lg:hidden text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiX /> : <RxHamburgerMenu />}
          </div>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row items-center gap-6 absolute lg:relative top-[100px] lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow lg:shadow-none py-6 lg:py-0 z-20 transition-transform duration-1000 ease-in-out`}
          >
            <ul className="flex flex-col lg:flex-row font-poppins font-medium text-md text-base gap-6 lg:gap-20 leading-6 lg:ml-0 ml-4">
              <li className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">Home</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">Shop</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">About</li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors duration-200">Contact</li>
            </ul>
          </nav>

          {/* Icons for Desktop */}
          <div className="hidden lg:flex text-2xl gap-6 font-bold">
            <BsPersonExclamation className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
            <GoSearch className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
            <BsHeart className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
            <LuShoppingCart className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
          </div>
        </div>
      </header>

      {/* Icons for Mobile  */}
      <footer className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center py-3 text-2xl font-bold z-30">
        <BsPersonExclamation className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
        <GoSearch className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
        <BsHeart className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
        <LuShoppingCart className="hover:text-yellow-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
      </footer>
    </>
  );
}
