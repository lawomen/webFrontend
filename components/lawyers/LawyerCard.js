import style from "../styles/lawyercard.module.css";

function LawyerCard({ name, areas_of_law, bio, email }) {
  return (
    <div className={style.card}>
      <div className={style.nameCont}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.email}>{email}</p>
      </div>
      <div className={style.areaCont}>
        <h3>Areas of Law:</h3>
        {areas_of_law.map(({ id, text }) => (
          <div className={style.areaCard} key={id}>
            {text}
          </div>
        ))}
      </div>
      <p className={style.bio}>{bio}</p>
    </div>
  );
}

export default LawyerCard;
