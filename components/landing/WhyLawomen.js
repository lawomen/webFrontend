import Image from "next/image";
import styles from "../styles/whylawomen.module.css";
import { BsFillBookmarksFill } from "react-icons/bs";

function WhyLawomen({ content }) {
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <h3>{content.whyTitle}</h3>
        <p>{content.reason1}</p>
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
