import React from "react";

const PostsLine = ({img, title, index}) => {
  return (
        <article key={index} className="box-border">
          <a href="">
            <img
              src={img}
              alt=""
              className="w-full hover:grayscale-[50%] h-[70%] md:h-[83%] object-cover"
            />
            <span className="h-12 w-[1px] bg-[--text] relative block top-[-25px] mb-[-25px] mt-0 mx-auto"></span>
            <h2 className="font-bold font-sans text-xl text-center hover:text-[--text-hover]">
              {title}
            </h2>
          </a>
        </article>
  );
}

export default PostsLine;
