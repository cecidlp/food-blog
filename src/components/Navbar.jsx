import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";
import Menu from "./Menu";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed w-full z-50 top-0">
      <nav className="flex w-full relative bg-white justify-between items-center py-3 px-3 border-t-4 border-t-[--grey] lg:px-28 lg:py-3">
        <div onClick={handleNav}>
          {nav ? (
            <AiOutlineClose className="text-[--text] lg:text-4xl hover:text-[--text-hover] cursor-pointer" />
          ) : (
            <AiOutlineMenu className="text-[--text] lg:text-4xl hover:text-[--text-hover] cursor-pointer" />
          )}
        </div>
        {nav && <Menu/> }
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="max-w-[150px] lg:max-w-[250px] lg:pl-10 cursor-pointer transition ease-in delay-200 hover:scale-95"
          />
        </Link>
        <ul className="hidden lg:flex justify-around w-full text-base font-medium lg:text-sm">
          <li className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            <Link to={"/desserts"}>Desserts & Baking</Link>
          </li>
          <li className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            <Link to={"/ingredient-index"}>Ingredient Index </Link>
          </li>
          <li className="hover:underline decoration-1 decoration-[--text-hover] underline-offset-8 hover:transition-all hover:text-[--text-hover] cursor-pointer">
            Recipe Index
          </li>
        </ul>
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
      </nav>
    </header>
  );
}

export default Navbar;
