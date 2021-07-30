import styles from "../styles/people.module.css";
import Link from "next/link";
import Image from "next/image";

function People({ content, applyContent }) {
  const landingPatrons = content.filter((ele) => {
    return ele.type === "patron";
  });

  const landingTeam = content.filter((ele) => {
    return ele.type === "team";
  });


  return (
    <div className={styles.mainCont}>
      <div className={styles.teamCont}>
        <h2 className={styles.secTitle}>{applyContent.teamTitle}</h2>
        <div className={styles.cardCont}>
          {landingTeam.map((ele) => {
            return (
              <div key={ele.id} className={styles.cards}>
                <div className={styles.cardsImg}>
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={ele.image.url}
                    alt={ele.image.alternativeText}
                  />
                </div>
                <p className={styles.cardSubtitle}>{ele.name}</p>
                {<p className={styles.cardSubtitle2}>{ele.position_optional}</p>}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.patronsCont}>
        <h2 className={styles.secTitle}>{applyContent.patronTitle}</h2>
        <div className={styles.cardCont}>
          {landingPatrons.map((ele) => {
            return (
              <div key={ele.id} className={styles.cards}>
                <div className={styles.cardsImg}>
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={ele.image.url}
                    alt={ele.image.alternativeText}
                  />
                </div>
                <p className={styles.cardSubtitle}>{ele.name}</p>
                {<p>{ele.position_optional}</p>}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.applyCont}>
        <h2>{applyContent.joinTitle}</h2>
        <div className={styles.applyLink}>
          {applyContent.textAndLink.map((ele) => {
            return (
              <Link key={ele.id} href={ele.link}>
                {ele.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default People;
