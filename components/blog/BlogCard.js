import Image from "next/image";
import Link from "next/link";
import style from "../styles/blogcard.module.css";

function BlogCard({ subpath, title, date_created, picture, blog_short_desc }) {
  return (
    <Link href={`/blog/${subpath}`}>
      <div className={style.card}>
        <div className={style.cardPic}>
          <Image
            alt="Picture"
            src={picture.url}
            layout="fill"
            objectFit="cover"
            quality={50}
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
