import style from "../styles/lawyercard.module.css";
import { useTranslation } from "next-i18next";
import {HiOutlineCheckCircle} from 'react-icons/hi'

function LawyerCard({ name, law_area, bio, available }) {
  const { t } = useTranslation("lawyerSearch");
  return (
    <div className={style.card}>
      <div className={style.nameCont}>
        <h1 className={style.name}>{name}</h1>
        {available ? <p className={style.isAva}>Available <HiOutlineCheckCircle size={20}/> </p> : ""}
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
