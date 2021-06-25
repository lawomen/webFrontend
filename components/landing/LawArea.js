import styles from "../styles/lawarea.module.css";
import {GoLaw} from 'react-icons/go';
import {RiFilePaper2Fill, RiFolderKeyholeLine} from 'react-icons/ri';
import {AiOutlineHourglass} from 'react-icons/ai'
import {CgArrowRight} from 'react-icons/cg'

function LawArea() {
  return (
    <div className={styles.cont}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Civil Law</h3>
        <GoLaw className={styles.cardIcon} size={70}/>
        <p>
          We provide services in ___ law, examples include blah blah blah. Well written words to fill in with. Blah blah.
        </p>
        <CgArrowRight size={40} className={styles.arrow}/>
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Civil Law</h3>
        <RiFilePaper2Fill className={styles.cardIcon} size={70}/>
        <p>
          We provide services in ___ law, examples include blah blah blah. Well written words to fill in with. Blah blah.
        </p>
        <CgArrowRight size={40} className={styles.arrow}/>
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Civil Law</h3>
        <RiFolderKeyholeLine className={styles.cardIcon} size={70}/>
        <p>
          We provide services in ___ law, examples include blah blah blah. Well written words to fill in with. Blah blah.
        </p>
        <CgArrowRight size={40} className={styles.arrow}/>
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Civil Law</h3>
        <AiOutlineHourglass className={styles.cardIcon} size={70}/>
        <p>
          We provide services in ___ law, examples include blah blah blah. Well written words to fill in with. Blah blah.
        </p>
        <CgArrowRight size={40} className={styles.arrow}/>
      </div>
    </div>
  );
}

export default LawArea;
