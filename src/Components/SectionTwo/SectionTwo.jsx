import React from "react";
import styles from "../SectionTwo/SectionTwo.module.scss";

const SectionTwo = () => {
  return (
    <div>
      <section className={styles.secTwo}>
        <div className={styles.cont}>
          <div className={styles.textTwo}>
            <h2>New Arrival</h2>
          </div>
          <div className={styles.imgTwo}>
            <div className={styles.card}>
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
                alt=""
              />
              <div className={styles.write}>
                <h5>Thermo Ball Etip Gloves</h5>
                <span>$ 45,743</span>
              </div>
            </div>
            <div className={styles.card}>
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
                alt=""
              />
              <div className={styles.write}>
                <h5>Thermo Ball Etip Gloves</h5>
                <span>$ 45,743</span>
              </div>
            </div>

            <div className={styles.card}>
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
                alt=""
              />
              <div className={styles.write}>
                <h5>Thermo Ball Etip Gloves</h5>
                <span>$ 45,743</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
