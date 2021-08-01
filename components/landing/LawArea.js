import Link from "next/link";
import styles from "../styles/lawarea.module.css";
import { GoLaw } from "react-icons/go";
import {
  RiFilePaper2Fill,
  RiFolderKeyholeLine,
  RiHome4Line,
} from "react-icons/ri";
import { AiOutlineHourglass } from "react-icons/ai";
import { CgArrowRight } from "react-icons/cg";
import { IoBusinessSharp } from "react-icons/io5";

function LawArea({ content }) {
  return (
    <div className={styles.cont}>
      {content.map(({ id, area_title, area_desc, landing_icon }) => (
        <Link key={id} passHref href="/services">
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{area_title}</h3>
            {landing_icon === "LawIcon" && (
              <GoLaw className={styles.cardIcon} size={65} />
            )}
            {landing_icon === "PaperIcon" && (
              <RiFilePaper2Fill className={styles.cardIcon} size={65} />
            )}
            {landing_icon === "FolderIcon" && (
              <RiFolderKeyholeLine className={styles.cardIcon} size={65} />
            )}
            {landing_icon === "HourglassIcon" && (
              <AiOutlineHourglass className={styles.cardIcon} size={65} />
            )}
            {landing_icon === "HomeIcon" && (
              <RiHome4Line className={styles.cardIcon} size={65} />
            )}
            {landing_icon === "OfficeIcon" && (
              <IoBusinessSharp className={styles.cardIcon} size={65} />
            )}
            {!landing_icon && <GoLaw className={styles.cardIcon} size={65} />}

            <p>{area_desc}</p>
            <CgArrowRight size={40} className={styles.arrow} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LawArea;
