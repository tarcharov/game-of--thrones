import React from "react";
import Card from "./components/Card";
import styles from "./styles/characters.module.css";
import ScrollContainer from "react-indiana-drag-scroll";
const Characters = ({ setVisible, setSubmit, allCharacters }) => {
  return (
    <div className={styles.main}>
      <h1>Characters</h1>
      <ScrollContainer className={styles.container} activationDistance="10">
        {allCharacters.length > 0 ? (
          allCharacters.map((character) => (
            <Card
              fullName={character.fullName}
              title={character.title}
              imageUrl={character.imageUrl}
            />
          ))
        ) : (
          <p>Персонажей нет</p>
        )}
      </ScrollContainer>
      <button
        onClick={() => {
          setSubmit(false);
          setVisible(true);
        }}
      >
        JOIN TO BATTLE
      </button>
    </div>
  );
};

export default Characters;
