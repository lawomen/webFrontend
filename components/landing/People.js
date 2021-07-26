import styles from "../styles/people.module.css";
import Link from "next/link";
import Image from "next/image";

function People() {
  return (
    <div className={styles.mainCont}>
      <div className={styles.teamCont}>
        <h2 className={styles.secTitle}>Our Team</h2>
        <div className={styles.cardCont}>


          <div className={styles.cards}>
            <div className={styles.cardsImg}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/TempkravisLabLogo.png"
                alt="Kravis Lab Logo"
              />
            </div>
            <p className={styles.cardSubtitle}>Kravis Lab</p>
          </div>


          <div className={styles.cards}>
            <div className={styles.cardsImg}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/TempkravisLabLogo.png"
                alt="Kravis Lab Logo"
              />
            </div>
            <p className={styles.cardSubtitle}>Kravis Lab</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.cardsImg}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/TempkravisLabLogo.png"
                alt="Kravis Lab Logo"
              />
            </div>
            <p className={styles.cardSubtitle}>Kravis Lab</p>
          </div>


        </div>
      </div>

      <div className={styles.patronsCont}>
        <h2 className={styles.secTitle}>Our Patrons</h2>
        <div className={styles.cardCont}>

          
          <div className={styles.cards}>
            <div className={styles.cardsImg}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/TempkravisLabLogo.png"
                alt="Kravis Lab Logo"
              />
            </div>
            <p className={styles.cardSubtitle}>Kravis Lab</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.cardsImg}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/TempkravisLabLogo.png"
                alt="Kravis Lab Logo"
              />
            </div>
            <p className={styles.cardSubtitle}>Kravis Lab</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.cardsImg}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/TempkravisLabLogo.png"
                alt="Kravis Lab Logo"
              />
            </div>
            <p className={styles.cardSubtitle}>Kravis Lab</p>
          </div>

        </div>
      </div>

      <div className={styles.applyCont}>
        <h2>Join Us!</h2>
        <div className={styles.applyLink}>
          <Link href="/apply">Apply for a fellowship</Link>
          <Link href="/apply">Volunteer</Link>
          <Link href="/apply">Join the Team</Link>
        </div>
      </div>
    </div>
  );
}

export default People;
