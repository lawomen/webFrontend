import styles from "../styles/popup.module.css";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

function Modal({ content }) {
  const [curOpen, setOpen] = useState(content);

  return (
    <>
      {curOpen ? (
          <div className={styles.main}>
            <RiCloseFill onClick={() => setOpen(false)} className={styles.icon} size={30}/>
            <p className={styles.paragraph}>{content}</p>
          </div>
      ) : null}
    </>
  );
}

export default Modal;
