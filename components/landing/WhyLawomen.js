import Image from "next/image";
import styles from "../styles/whylawomen.module.css";
import {BsFillBookmarksFill} from 'react-icons/bs'

function WhyLawomen() {
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <h3>Why LaWomen</h3>
        <p>We have </p>
        <BsFillBookmarksFill className={styles.bgIcon} size={300} />
      </div>
      <div className={styles.image}>
        <Image
          alt="Decorative background image of library"
          src="/unsplashHomeTemp.jpg"
          layout="fill"
          objectFit="cover"
          quality={10}
          priority
        />
      </div>
    </div>
  );
}

export default WhyLawomen;
