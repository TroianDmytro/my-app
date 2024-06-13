import React from 'react';
import bmwImg from '../../img/image.webp';
import styles from './MyComponent.module.css';
import iconCar from '../../img/free-icon-delivery-709790.png'
import iconHeart from "../../img/pngwing.com.png"

const MyComponent = () => (
  <div className={styles.MyComponent}>
    <div className={styles.cardBmw}>
      <div className={styles.cardBmwImg}>
        <img src={bmwImg} alt='' className={styles.mainImgCard} />
        <div className={styles.containerIconCar}>
          <img  src={iconCar} alt='' className={styles.iconCar}></img>
        </div>
      </div>
      <div className={styles.CardInfo}>
        <div className={styles.CardTitle}>
          <p>
          Обвес M-Performance тюнинг BMW X5 F15 Спойлер Диффузор Пороги Губа
          </p>
        </div>
        <div className={styles.StatusCar}>
          <p>
            Нове
          </p>
        </div>
        <div className={styles.Location}>
          <p>
            Київ, Печерський-06 червня 2024 р.
          </p>
        </div>
      </div>
      <div className={styles.PriceAndSelected}>
        <div className={styles.Price}>
          <img src={iconCar} alt='' className={styles.IconCarPrice}/>
          <p><strong>11 343 грн.</strong></p>
        </div>
        <div className={styles.Selected}>
          <img src={iconHeart} alt='' className={styles.iconHeartStyle}/>
        </div>
      </div>
    </div>
  </div>
);

export default MyComponent;
