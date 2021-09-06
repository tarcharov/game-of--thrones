import React from "react";
import styles from "./styles/card.module.css";

// Тут мы явно указываем, что должно передаваться в комонент
const Card = ({ firstName, lastName, imageUrl }) => {
  return (
    <div className={styles.container}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <img src={imageUrl} alt="CharacterImg"></img>
    </div>
  );
};

export default Card;
