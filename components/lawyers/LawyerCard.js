import style from "../styles/lawyercard.module.css";
import { useTranslation } from "next-i18next";

function LawyerCard({ name, law_area, bio, email }) {
  const { t } = useTranslation("lawyerSearch");
  return (
    <div className={style.card}>
      <div className={style.nameCont}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.email}>{email}</p>
      </div>
      <div className={style.areaCont}>
        <h3>{t("lawArea2")}</h3>
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
