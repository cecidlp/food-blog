import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.webp";
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";

function Navbar() {
  return (
    <div className="fixed w-full z-10 top-0">
      <div className="flex w-full relative bg-white justify-between items-center py-3 px-3 border-t-4 border-t-[--grey] lg:px-28 lg:py-3">
        <AiOutlineMenu className="text-[--text] lg:text-4xl hover:text-[--text-hover] cursor-pointer" />
        <Link to={'/'} >
        <img
          src={logo}
          alt="logo"
          className="max-w-[150px] lg:max-w-[250px] lg:pl-10 cursor-pointer transition ease-in delay-200 hover:scale-95"
        />
        </Link>
        <div className="hidden lg:flex justify-around w-full text-base font-medium lg:text-sm">
          <p className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            <Link to={'/about'} >About</Link> 
          </p>
          <p className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
          <Link to={'/desserts'}>Desserts & Baking</Link>
          </p>
          <p className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
          <Link to={'/ingredient-index'}>Ingredient Index </Link>
          </p>
          <p className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            Recipe Index
          </p>
        </div>
        <div className="hidden lg:flex pr-10 gap-2">
          <a href="https://www.facebook.com/TheLittleEpicurean">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/littleepicurean/?">
            <FaInstagram />
          </a>
          <a href="https://www.pinterest.com/lil_epicurean/">
            <FaPinterest />
          </a>
          <a href="https://www.tiktok.com/@littleepicurean">
            <FaTiktok />
          </a>
        </div>
        <IoSearch className="text-[--text] lg:text-4xl hover:text-[--text-hover] cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
