import { RiChatQuoteFill } from "react-icons/ri";
import styles from "../styles/testimonials.module.css";

function Testimonials({ content }) {
  if (false && content.length === 0) {
    return <></>;
  } else {
    return (
      <div className={styles.mainCont}>
        {content.map((ele) => {
          return (
            <div className={styles.quoteCard} key={ele.id}>
              <RiChatQuoteFill size={50} />
              <p>{ele.entry}</p>
              {ele.source ? <p> – {ele.source}</p> : ""}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Testimonials;
