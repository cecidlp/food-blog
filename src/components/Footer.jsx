import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";
import logo from "../assets/logo.webp";
import { footerRecipes } from "../RecipesData";

function Footer() {
  function truncateText(text) {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, 19);
    const joinWords = truncatedWords.join(" ");
    return joinWords + "...";
  }

  return (
    <div className="px-5 w-full mx-auto lg:max-w-[1200px]">
      <img src={logo} alt="" className="w-[250px] md:w-[300px]" />
      <div className="pt-10 border-y-2 border-[--grey] md:flex md:flex-wrap md:relative md:items-start md:flex-row md:justify-between lg:gap-5 lg:flex-nowrap">
        <div className="flex col lg:w-[20%] ">
          <div className="border-b-2 border-[--grey] pb-5 mb-5 lg:border-none">
            <p className="text-sm mb-4">
              Ahead of Thyme is a Los Angeles-based recipe blog featuring
              from-scratch baking, decadent dessert, and unique cocktails.
            </p>
            <div className="flex row my-2">
              <p className="italic text-xs w-full">Let's get social!</p>
              <div className="flex row gap-1">
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
            </div>
          </div>
        </div>
        {footerRecipes.map((card, index) => (
          <div className="group-col md:w-1/4 mx-2.5 md:mx-0 " key={index}>
            <h2 className="bg-[--text] text-xs font-bold text-white font-sans p-2 w-fit mb-2 tracking-widest md:text-[--text] md:bg-transparent md:p-0">
              {card.category}
            </h2>
            {card.articles.map((article, articleIndex) => (
              <article className="mb-5" key={articleIndex}>
                <h3 className="mb-1">
                  <a
                    href=""
                    className="font-sans text-xl font-semibold hover:text-[--text-hover]"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-xs">{truncateText(article.text)}</p>
              </article>
            ))}
          </div>
        ))}
      </div>
      <footer className="py-5 md:flex md:flex-row md:items-center justify-between">
        <ul className="flex flex-wrap mb-3 items-center justify-evenly md:flex-nowrap md:gap-4 md:mb-0">
          <li className="bg-[--grey] p-4 text-xs italic w-1/2 -mx-2.5 mr-1 mb-1 md:bg-transparent md:w-full md:mr-0 md:mb-0 md:mx-0 md:p-0">
            <a href="">About</a>
          </li>
          <li className="bg-[--grey] p-4 text-xs italic w-1/2 -mx-2.5 mb-1 md:bg-transparent md:w-full md:mb-0 md:mr-0 md:mx-0 md:p-0">
            <a href="">Contact</a>
          </li>
          <li className="bg-[--grey] p-4 text-xs italic w-1/2 -mx-2.5 mr-1 mb-1 md:bg-transparent md:w-full md:mr-0 md:mb-0 md:mx-0 md:p-0">
            <a href="">Privacy Policy</a>
          </li>
          <li className="bg-[--grey] p-4 text-xs italic w-1/2 -mx-2.5 mb-1 md:bg-transparent md:w-full md:mb-0 md:mr-0 md:mx-0 md:p-0">
            <a href="">Terms</a>
          </li>
        </ul>
        <p className="text-[0.6rem] font-sans">
          © 2023 Ahead of Thyme, All Rights Reserved. Design by LH.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
