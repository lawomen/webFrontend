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
            <h4>Female Lawyers Team</h4>
            <p>Reason Desc</p>
          </div>
          <div className={styles.reason}>
            <h4>Corporate Social Responsibility</h4>
            <p>Reason Desc</p>
          </div>
          <div className={styles.reason}>
            <h4>Special Package for Corporate Bodies</h4>
            <p>Reason Desc</p>
          </div>
          <div className={styles.reason}>
            <h4>Online</h4>
            <p>Reason Desc</p>
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
