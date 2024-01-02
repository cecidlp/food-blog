import React from "react";

function Guides() {
  return (
    <div className="bg-[--grey] w-full mb-14 px-5 py-8">
      <div className="max-w-[1200px] my-0 mx-auto px-3">
        <div className="flex flex-col items-center bg-white lg:flex-row">
          <a href="">
            <img
              src="https://www.thelittleepicurean.com/wp-content/uploads/2022/10/banana-truffle-pie-1-800x450.jpg"
              alt=""
              className="h-auto max-w-full block hover:grayscale-[50%]"
            />
          </a>
          <div className=" p-5 relative lg:w-[40%]">
            <div className="bg-[--text] relative h-[1px] block w-[150px] mt-0 mb-[15px] ml-[-20px] mr-0"></div>
            <h3 className="font-sans font-bold text-sm tracking-[1px] pb-4">
              TRENDING TOPIC
            </h3>
            <h2 className="font-sans font-normal text-3xl pb-4">
              Baking Basics: How to Make Pie Dough
            </h2>
            <p className="text-sm font-light pb-4">
              Learn how to make flaky pie dough using two different techniques.
              Choose the method that works best for you!
            </p>
            <a href="">
              <h3 className="font-sans font-bold text-[13px] tracking-[1px] hover:text-[--text-hover]">
                VIEW MORE GUIDES
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guides;
