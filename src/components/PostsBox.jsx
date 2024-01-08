
const PostsBox = ({img, title, index}) => {
  return (
        <article
            key={index}
            className="w-[48%] box-border border-[1px] border-[--grey] md:w-[32%] lg:w-[15%] hover:grayscale-[50%] hover:text-[--text-hover]"
          >
            <a href="">
              <img src={img} alt="" className="object-cover h-[75%] w-full"/>
              <h3 className="font-sans font-bold text-base text-center px-2 py-4">
                {title}
              </h3>
            </a>
          </article>
  )
}

export default PostsBox