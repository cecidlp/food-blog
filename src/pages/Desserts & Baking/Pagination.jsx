import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="w-full flex flex-row justify-center">
      {pages.map((page, index) => {
        return (
          <div>
              <button key={index} className={page == currentPage ? "rounded-[50%] text-center w-10 h-10 mx-[8px] bg-[--text-hover] text-white inline-block text-base font-sans font-bold align-middle leading-[40px]" : "rounded-[50%] text-center w-10 h-10 mx-[8px] bg-[--grey] inline-block text-base font-sans font-bold align-middle leading-[40px]"}  onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
