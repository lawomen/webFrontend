import Image from "next/image";
import { useState } from "react";
import style from "./styles/photo.module.css";

function Photo({ url, alt }) {
  const [showInfo, updateShowInfo] = useState(false);

  return (
    <div className={style.cardCont}>
      <div
        onMouseEnter={() => updateShowInfo((prev) => !prev)}
        onMouseLeave={() => updateShowInfo((prev) => !prev)}
        className={style.imgCont}
      >
        <Image layout="fill" objectFit="cover" src={url} alt={alt} />
        {showInfo ? (
          <div className={style.aboutCont}>
            <p>{alt}</p>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default Photo;
