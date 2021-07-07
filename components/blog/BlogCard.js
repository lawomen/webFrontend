import Image from "next/image";
import Link from "next/link";
import style from "../styles/blogcard.module.css";

function BlogCard({ id, title, date_created, blog, picture, blog_short_desc }) {
  return (
    <Link href={`/blog/${id}`}>
      <div className={style.card}>
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
    </Link>
  );
}

export default BlogCard;
