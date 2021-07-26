import { RiChatQuoteFill } from "react-icons/ri";
import styles from "../styles/testimonials.module.css";

function Testimonials({ content }) {
  if (false && content.length === 0) {
    return <></>;
  } else {
    return (
      <div className={styles.mainCont}>
        <div className={styles.quoteCont}>
          <RiChatQuoteFill size={50} />
          <p>
            Sed dictum, tortor a iaculis ultrices, eros odio egestas quam, eget
            lacinia nisl lacus vel mi. Fusce in eros eu quam fringilla
            elementum. Curabitur finibus
          </p>
        </div>
      </div>
    );
  }
}

export default Testimonials;
