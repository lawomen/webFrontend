import style from "../styles/Notice.module.css";

import { RiPushpinLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

function Notice({ content }) {
  return (
    <div className={style.cont}>
      <div className={style.header}>
        <h1>{content.newsTitle}</h1>
        <RiPushpinLine size={35} />
      </div>
      {content.noticeBoard.map((ele) => (
        <div
          key={ele.id}
          className={ele.type === "news" ? style.cardNotice : style.cardAd}
        >
          <h2>{ele.title}</h2>
          {ele.img ? (
            <div className={style.imgCont}>
              <Image
                layout="fill"
                objectFit="cover"
                priority
                src={ele.img.url}
                alt={ele.img.alternativeText}
              />
            </div>
          ) : (
            ""
          )}
          <p>{ele.content}</p>
          <Link href={ele.link}>{content.newsMoreInfoText}</Link>
        </div>
      ))}
    </div>
  );
}

export default Notice;
