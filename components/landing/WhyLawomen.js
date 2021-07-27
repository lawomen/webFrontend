import Image from "next/image";
import styles from "../styles/whylawomen.module.css";
import { BsFillBookmarksFill } from "react-icons/bs";

function WhyLawomen({ content }) {
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <h3>{content.whyTitle}</h3>
        <div className={styles.reasonCont}>
          <div className={styles.reason}>
            <h4>{content.reason1}</h4>
            <p>{content.reason1_desc}</p>
          </div>
          <div className={styles.reason}>
            <h4>{content.reason2}</h4>
            <p>{content.reason2_desc}</p>
          </div>
          <div className={styles.reason}>
            <h4>{content.reason3}</h4>
            <p>{content.reason3_desc}</p>
          </div>
          <div className={styles.reason}>
            <h4>{content.reason4}</h4>
            <p>{content.reason4_desc}</p>
          </div>
        </div>
        <BsFillBookmarksFill className={styles.bgIcon} size={300} />
      </div>
        <div className={styles.image}>
          <Image
            alt="Decorative image of people meeting"
            src="/peoplemeeting.jpeg"
            layout="fill"
            objectFit="cover"
          />
        </div>
    </div>
  );
}

export default WhyLawomen;
