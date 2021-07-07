import MarkdownIt from "markdown-it";
import Image from "next/image";
import style from "../styles/blogcard.module.css";

function BlogCard({ title, date_created, blog, picture, blog_short_desc }) {
  const md = MarkdownIt();
  const parsedBlog = md.render(blog);

  return (
    <div className={style.card}>
      {/* <div dangerouslySetInnerHTML={{ __html: parsedBlog }} /> */}
      <div className={style.cardPic}>
        <Image
          alt="Picture"
          src={picture.url}
          layout="fill"
          objectFit="cover"
          quality={25}
        />
      </div>
      <div className={style.cardDesc}>
        <p className={style.date}>{date_created}</p>
        <h3>{title}</h3>
        <p>{blog_short_desc}</p>
      </div>
    </div>
  );
}

export default BlogCard;
