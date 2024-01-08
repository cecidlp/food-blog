import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = () => {
    const [submenu, setSubmenu] = useState({
        ocassion: false,
        cuisine: false,
        desserts: false,
        ingredient: false,
        ocassion: false,
    });
    const handleSubmenu = (buttonName) => {
        setSubmenu((prevsubMenu) => ({
            ...prevsubMenu,
            [buttonName]: !prevsubMenu[buttonName],
        }));
    }

  return (
    <div className='block top-[62px] bg-[--text] absolute h-dvh w-full max-w-[350px] z-50 pt-8 pr-8 pl-8 pb-[200px] left-0 overflow-scroll text-white font-bold text-xl' >
        <ul className="p-0 m-0">
            <li className="py-[10px] relative items-center flex wrap justify-between ">
              <Link to={""}>Recipes</Link>
            </li>
            <li className={`py-[10px] relative items-center flex wrap justify-between ${submenu.cuisine ? 'mb-[80px]' : ''}`}>
              <Link to={""}>Cuisine</Link>
              <button onClick={() => handleSubmenu('cuisine')}>
                <IoIosArrowDown />
                {submenu.cuisine && (
                        <ul className="absolute top-full left-0 bg-[--text] text-sm font-medium">
                            <li className='p-3'><Link to="">Category 1</Link></li>
                            <li><Link to="">Category 2</Link></li>
                        </ul>
                    )}
              </button>
            </li>
            <li className={`py-[10px] relative items-center flex wrap justify-between ${submenu.desserts ? 'mb-[80px]' : ''}`}>
              <Link to={""}>Desserts</Link>
              <button onClick={() => handleSubmenu('desserts')}>
                <IoIosArrowDown />
                {submenu.desserts && (
                        <ul className="absolute top-full left-0 bg-[--text] text-sm font-medium">
                            <li className='p-3'><Link to="">Category 1</Link></li>
                            <li><Link to="">Category 2</Link></li>
                        </ul>
                    )}
              </button>
            </li>
            <li className={`py-[10px] relative items-center flex wrap justify-between ${submenu.ingredient ? 'mb-[80px]' : ''}`}>
              <Link to={""}>Ingredient</Link>
              <button onClick={() => handleSubmenu('ingredient')}>
                <IoIosArrowDown />
                {submenu.ingredient && (
                        <ul className="absolute top-full left-0 bg-[--text] text-sm font-medium">
                            <li className='p-3'><Link to="">Category 1</Link></li>
                            <li><Link to="">Category 2</Link></li>
                        </ul>
                    )}
              </button>
            </li>
            <li className={`py-[10px] relative items-center flex wrap justify-between ${submenu.ocassion ? 'mb-[80px]' : ''}`}>
              <Link to={""}>Ocassion</Link>
              <button onClick={() => handleSubmenu('ocassion')}>
                <IoIosArrowDown />
                {submenu.ocassion && (
                        <ul className="absolute top-full left-0 bg-[--text] text-sm font-medium">
                            <li className='p-3'><Link to="">Category 1</Link></li>
                            <li><Link to="">Category 2</Link></li>
                        </ul>
                    )}
              </button>
            </li>
          </ul>
          <ul className="p-0 m-0">
            <li className="py-2 relative items-center flex wrap justify-between font-sans font-bold text-sm tracking-wider uppercase">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="py-2 relative items-center flex wrap justify-between font-sans font-bold text-sm tracking-wider uppercase">
              <Link to={""}>Privacy Policy</Link>
            </li>
            <li className="py-2 relative items-center flex wrap justify-between font-sans font-bold text-sm tracking-wider uppercase">
              <Link to={""}>Terms</Link>
            </li>
            <li className="py-2 relative items-center flex wrap justify-between font-sans font-bold text-sm tracking-wider uppercase">
              <Link to={""}>Contact</Link>
            </li>
          </ul>
    </div>
  )
}

export default Menu