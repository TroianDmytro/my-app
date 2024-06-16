import React from 'react';
import styles from './Shveps.module.css';
import logo from "../../img/завантаження1.jpg";
import heart from "../../img/Heart.png";
import star from "../../img/star.png";
import mes from "../../img/iconSms.png";

const NewComponent = () => (
  <div className={styles.Shveps}>
    <div className={styles.ShvepsCard}>
      <div className={styles.ContainerLogo}>
        <img src={logo} alt="dsdgsa" className={styles.Logo} />
        <img src={heart} alt='gvdg' className={styles.Preferences} />

      </div>
      <p className={styles.TitleProd}>Напій Швепс Мохіто / Schweppes Classic Mojito, ж/б, 0.25л</p>
      <div className={styles.Reviews}>
        <div className={styles.Stars}>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div className={styles.Comments}>
          <img src={mes} alt="" />
          <p className={styles.CountMess}>4</p>
        </div>
      </div>
      <div className={styles.OldPriceAndDiscount}>
        <div className={styles.OldPrice}><s>28&#8372;</s></div>
        <div className={styles.Discount}>-21%</div>
      </div>
      <div className={styles.ConteinerNewPrice}>
        <p className={styles.NewPrice}>22&#8372;</p>
      </div>
      <div>
        <button className={styles.BtnBuy}>Купити</button>
      </div>
    </div>
  </div>
);

export default NewComponent;
