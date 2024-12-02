import React from 'react'
import Logo from '../assets/logo.png';
import { BsPersonExclamation } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsHeart } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
export default function Navbar() {
  return (
    <>
    <header>
        <div>
            {/* LogoDiv */}
            <div>
                <img src={Logo} alt="Logo" /> 
            </div>
            {/* UL */}
            <div>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Icons */}

            <div>
            <BsPersonExclamation />
            <GoSearch/>
            <BsHeart/>
            </div>
        </div>
        
    </header>
        
    </>
  )
}
