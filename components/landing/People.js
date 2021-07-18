import styles from "../styles/people.module.css";

function People() {
  return (
    <div className={styles.mainCont}>
      <div className={styles.peopleCont}>
        <h2>Our Team</h2>
        <div className={styles.peopleCards}></div>
      </div>

      
      <div className={styles.supporters}>
        <div className={styles.peopleCont}>
          <h2>Our Partners</h2>
          <div className={styles.peopleCards}></div>
        </div>
        <div className={styles.peopleCont}>
          <h2>Our Patrons</h2>
          <div className={styles.peopleCards}></div>
        </div>
      </div>

      {/* <h2>Join Us!</h2>
      <div>
        <div>
          <p>Apply for a Position</p>
        </div>
        <div>
          <p>Apply for a Fellowship</p>
        </div>
      */}
    </div>
  );
}

export default People;
