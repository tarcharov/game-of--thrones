import React from "react";
import styles from "./styles/card.module.css";

// Тут мы явно указываем, что должно передаваться в комонент
const Card = ({ firstName, lastName, title, imageUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="CharacterImg"></img>
      <p>{`${firstName} ${lastName}`}</p>
      <p>{title}</p>
    </div>
  );
};

export default Card;
