import React, { useEffect, useCallback } from "react";
import styles from "./styles/droplist.module.css";

import arrowDown from "../../../../../../assets/images/arrow_down.svg";
import arrowUp from "../../../../../../assets/images/arrow_up.svg";
const DropList = ({
  selected,
  setSelected,
  allCharacters,
  isActive,
  setIsActive,
  setCharacterDirty,
  setCharacterError,
}) => {
  const close = useCallback(
    (event) => {
      console.log(event.target);
      if (
        !event.target.closest("#sel_val") &&
        !event.target.closest("#content")
      ) {
        setIsActive(false);
        setSelected("");
        setCharacterError("Выбери персонажа");
      }
    },
    [setIsActive, setSelected, setCharacterError]
  );
  useEffect(() => {
    if (isActive === true) document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  }, [isActive, close]);

  function filter(characters) {
    return characters.filter(
      (character) =>
        character.fullName.toLowerCase().indexOf(selected.toLowerCase()) > -1
    );
  }
  const characterHandler = (e) => {
    setSelected(e.target.value);
    if (e.target.value !== "") setCharacterError("");
    else setCharacterError("Выбери персонажа");
  };

  return (
    <div className={styles.main}>
      <div
        className={styles.main_btn}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className={styles.selected_value} id="sel_val">
          <input
            value={selected}
            placeholder="Choose your favourite character"
            onChange={(e) => {
              characterHandler(e);
            }}
            onBlur={() => setCharacterDirty(true)}
          ></input>
          <img src={isActive ? arrowUp : arrowDown} alt="arrowImg"></img>
        </div>
      </div>
      {isActive && (
        <div className={styles.main_content} id="content">
          {allCharacters.length > 0 ? (
            filter(allCharacters).map((character) => (
              <div className={styles.main_item}
              onClick={(e) => {
                setSelected(e.target.textContent);
                setIsActive(false);
                setCharacterError("");
              }}>
                <p>
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
