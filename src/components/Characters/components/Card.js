import React from "react";
import styles from "./styles/card.module.css";

// Тут мы явно указываем, что должно передаваться в комонент
const Card = ({ fullName, title, imageUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="CharacterImg"></img>
      <p>{fullName}</p>
      <p>{title}</p>
    </div>
  );
};

export default Card;
