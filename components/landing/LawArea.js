import styles from "../styles/lawarea.module.css";
import { GoLaw } from "react-icons/go";
import { RiFilePaper2Fill, RiFolderKeyholeLine } from "react-icons/ri";
import { AiOutlineHourglass } from "react-icons/ai";
import { CgArrowRight } from "react-icons/cg";

function LawArea({ content }) {
  return (
    <div className={styles.cont}>
      {content.map(({ id, area_title, area_desc, icon }) => (
        <div className={styles.card} key={id}>
          <h3 className={styles.cardTitle}>{area_title}</h3>
          {icon === "GoLaw" && <GoLaw className={styles.cardIcon} size={70} />}
          {icon === "RiFilePaper2Fill" && (
            <RiFilePaper2Fill className={styles.cardIcon} size={70} />
          )}
          {icon === "RiFolderKeyholeLine" && (
            <RiFolderKeyholeLine className={styles.cardIcon} size={70} />
          )}
          {icon === "AiOutlineHourglass" && (
            <AiOutlineHourglass className={styles.cardIcon} size={70} />
          )}
          {!icon && <GoLaw className={styles.cardIcon} size={70} />}
          <p>{area_desc}</p>
          <CgArrowRight size={40} className={styles.arrow} />
        </div>
      ))}
    </div>
  );
}

export default LawArea;
