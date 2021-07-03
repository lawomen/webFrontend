import style from "../styles/impact.module.css";

function Impact({content}) {
  return (
    <div className={style.cont}>
      <h3>{content.impact_title}</h3>
      <p className={style.subtitle}>
        {content.impact_desc}
      </p>
      <div className={style.cardCont}>
      <div className={style.card}>
          <div className={style.imgCont}></div>
          <h3>{content.impact_card1}</h3>
          <p>{content.impact_card1_desc}</p>
        </div>


        <div className={style.card}>
          <div className={style.imgCont}></div>
          <h3>{content.impact_card2}</h3>
          <p>{content.impact_card2_desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
