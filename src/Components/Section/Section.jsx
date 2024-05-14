import React from "react";
import styles from "./Section.module.scss";

const Section = () => {
  return (
    <div>
      <section className={styles.secOne}>
        <div className={styles.containerFirst}>
          <div className={styles.text}>
            <h1>Select Your New Perfect Style</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <button>SHOP MOW</button>
          </div>
          <div className={styles.img}>
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
