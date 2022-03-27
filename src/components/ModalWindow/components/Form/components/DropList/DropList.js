import React, { useEffect, useState } from "react";
import styles from "./styles/droplist.module.css";

import arrowDown from "../../../../../../assets/images/arrow_down.svg";
import arrowUp from "../../../../../../assets/images/arrow_up.svg";
const DropList = ({ selected, setSelected, allCharacters }) => {
  const [isActive, setIsActive] = useState(false);

  function filter(characters) {
    return characters.filter(
      (character) =>
        character.fullName.toLowerCase().indexOf(selected.toLowerCase()) > -1
    );
  }
  return (
    <div className={styles.main}>
      <div className={styles.main_btn} onClick={(e) => setIsActive(!isActive)}>
        <div className={styles.selected_value}>
          <input
            value={selected}
            placeholder="Choose your favourite character"
            onChange={(event) => setSelected(event.target.value)}
            onClick={() => setSelected("")}
          ></input>
        </div>

        <img src={isActive ? arrowUp : arrowDown}></img>
      </div>
      {isActive && (
        <div className={styles.main_content}>
          {allCharacters.length > 0 ? (
            filter(allCharacters).map((character) => (
              <div className={styles.main_item}>
                <p
                  onClick={(e) => {
                    setSelected(e.target.textContent);
                    setIsActive(false);
                  }}
                >
                  {character.fullName}
                </p>
              </div>
            ))
          ) : (
            <p>Персонажей нет</p>
          )}
        </div>
      )}
    </div>
  );
};
export default DropList;
