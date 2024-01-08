import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const ViewAll = ({title}) => {
  return (
        <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-5 lg:flex-row lg:w-full lg:justify-between">
          <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center lg:mx-0 lg:text-[1.7rem]">
            {title}
          </h2>
          <div className="flex items-center">
            <a href="" className="flex items-center hover:text-[--text-hover]">
              <h3 className="font-sans text-[0.8rem] font-bold tracking-[1px] pr-1 ">
                VIEW MORE RECIPES
              </h3>
              <IoArrowForwardCircleOutline />
            </a>
          </div>
        </div>
      </div>
  )
}

export default ViewAll