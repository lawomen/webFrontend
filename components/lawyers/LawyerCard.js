import Link from "next/link";
import style from "../styles/lawyercard.module.css";
import { useTranslation } from "next-i18next";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { CgArrowRight } from "react-icons/cg";

function LawyerCard({ name, law_area, bio, available, lawomenLawyer, city, contactLink }) {
  const { t } = useTranslation("lawyerSearch");
  return (
    <div className={style.card}>
      <div className={style.nameCont}>
        <h1 className={style.name}>{name}</h1>
        {city ? (
          <p className={style.features}>
            <FiMapPin size={20} />
            {city}
          </p>
        ) : (
          ""
        )}
        {available ? (
          <p className={style.features}>
            <HiOutlineCheckCircle size={20} /> {t("ava")}
          </p>
        ) : (
          ""
        )}
        {lawomenLawyer ? (
          <p className={style.features}>
            <HiOutlineCheckCircle size={20} /> {t("lawomenLawyer")}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={style.areaCont}>
        <h3>{t("lawArea2")}</h3>
        {law_area.map(({ id, area_title }) => (
          <div className={style.areaCard} key={id}>
            {area_title}
          </div>
        ))}
      </div>
      <div className={style.bio}>
        <p>{bio}</p>

        <Link passHref href={contactLink}>
          <p className={style.contact}>
            {t("contact")} <CgArrowRight size={20} />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LawyerCard;
