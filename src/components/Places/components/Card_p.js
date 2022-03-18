import React from "react";
import styles from "./styles/card_p.module.css";

// Тут мы явно указываем, что должно передаваться в комонент
const Card_p = ({ name, imageUrl }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <img src={imageUrl} alt="ContinentsImg"></img>
      <div className={styles.shadow_block}></div>
    </div>
  );
};

export default Card_p;
