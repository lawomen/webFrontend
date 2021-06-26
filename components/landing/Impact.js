import style from "../styles/impact.module.css";

function Impact() {
  return (
    <div className={style.cont}>
      <h3>LaWomen is Mission Driven</h3>
      <p className={style.subtitle}>
        LaWomen is a law firm driven by making social change. We use our
        expertise in law to help women in need of legal help. Our main
        initiatives are:
      </p>
      <div className={style.cardCont}>
        <div className={style.card}>
          <div className={style.imgCont}></div>
          <h3>FFFFF</h3>
          <p>FFFF</p>
        </div>

        <div className={style.card}>
          <div className={style.imgCont}></div>
          <h3>FFFFF</h3>
          <p>FFFF</p>
        </div>

        <div className={style.card}>
          <div className={style.imgCont}></div>
          <h3>FFFFF</h3>
          <p>FFFF</p>
        </div>
      </div>
    </div>
  );
}

export default Impact;