import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.webp";
import { FaFacebook, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";

function Navbar() {
  return (
    <div className="fixed w-full z-10 top-0">
      <div className="flex w-full relative bg-white justify-between items-center py-3 px-3 border-t-4 border-t-[--grey] lg:px-28 lg:py-3">
        <AiOutlineMenu className="text-[--text] lg:text-5xl hover:text-[--text-hover] cursor-pointer" />
        <img
          src={logo}
          alt="logo"
          className="max-w-[150px] lg:max-w-[250px] lg:pl-10 cursor-pointer transition ease-in delay-200 hover:scale-95"
        />
        <div className="hidden lg:flex justify-between w-full px-10 text-base font-medium lg:text-sm">
          <p className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            About
          </p>
          <p className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            Ingredient Index
          </p>
          <p className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            Desserts & Baking
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
        <IoSearch className="text-[--text] lg:text-5xl hover:text-[--text-hover] cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
