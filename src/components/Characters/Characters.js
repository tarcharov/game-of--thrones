import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import Card from "./components/Card";
import styles from "./styles/characters.module.css";
import ScrollContainer from "react-indiana-drag-scroll";
const Characters = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    fetchData("Characters").then((result) => setAllCharacters(result));
  }, []);

  return (
    <div className={styles.main}>
      <h1>Characters</h1>
      <ScrollContainer className={styles.container} activationDistance="10">
        {allCharacters.length > 0 ? (
          allCharacters.map((character) => (
            <Card
              firstName={character.firstName}
              lastName={character.lastName}
              title={character.title}
              imageUrl={character.imageUrl}
            />
          ))
        ) : (
          <p>Персонажей нет</p>
        )}
      </ScrollContainer>
      <button>JOIN TO BATTLE</button>
    </div>
  );
};

export default Characters;
