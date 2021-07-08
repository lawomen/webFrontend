import style from "../styles/lawyercard.module.css";

function LawyerCard({ name, law_area, bio, email }) {
  return (
    <div className={style.card}>
      <div className={style.nameCont}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.email}>{email}</p>
      </div>
      <div className={style.areaCont}>
        <h3>Areas of Law:</h3>
        {law_area.map(({ id, area_title }) => (
          <div className={style.areaCard} key={id}>
            {area_title}
          </div>
        ))}
      </div>
      <p className={style.bio}>{bio}</p>
    </div>
  );
}

export default LawyerCard;
