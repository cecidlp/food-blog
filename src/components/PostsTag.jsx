import React from 'react'

const PostsTag = ({img, index, categories, title}) => {
  return (
        <article key={index} className="relative md:w-[32%] pb-4 md:pb-0 ">
            <a href="">
              <img
                src={img}
                className="h-auto max-w-full hover:grayscale-[50%]"
              />
              <div className="pb-5 px-4 bg-white border-b-4 border-[--text] absolute left-5 right-5 bottom-9 text-center font-sans">
                <div className="bg-[--text] text-white p-3 font-bold text-xs relative mt-[-10px] mb-0 mx-auto w-fit block">
                  <p className="hover:text-[--text-hover]">{categories}</p>
                </div>
                <h3 className="font-bold text-base md:text-xl pt-2 hover:text-[--text-hover]">
                  {title}
                </h3>
              </div>
            </a>
          </article>
  )
}

export default PostsTag