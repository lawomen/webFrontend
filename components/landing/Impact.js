import style from "../styles/impact.module.css";
import Image from "next/image";

function Impact({ content }) {
  return (
    <div className={style.cont}>
      <h3>{content.impact_title}</h3>
      <p className={style.subtitle}>{content.impact_desc}</p>
      <div className={style.cardCont}>
        <div className={style.card}>
          <div className={style.imgCont}>
            <Image
              alt="Image of women's right protest"
              src="/protest.jpeg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h3>{content.impact_card1}</h3>
          <p>{content.impact_card1_desc}</p>
        </div>

        <div className={style.card}>
          <div className={style.imgCont}>
            <Image
              alt="Image of UN Sustainability development goal 5"
              src="/sdg5.jpeg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h3>{content.impact_card2}</h3>
          <p>{content.impact_card2_desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
