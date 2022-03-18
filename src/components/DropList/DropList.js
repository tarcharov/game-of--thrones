import React, { useEffect, useState } from "react";
import styles from "./styles/droplist.module.css";
import { fetchData } from "../../utils/fetchData";
const DropList = () => {
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    fetchData("Characters").then((result) => setAllCharacters(result));
  }, []);

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className={styles.main}>
      <div className={styles.main_btn} onClick={(e) => setIsActive(!isActive)}>
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M1 5.93056H4.08375L5.49163 1L8.30727 11L10.1844 5.93056H13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Choose your favourite character
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M12.7072 1.35352L7.70718 6.35352C7.31666 6.74404 6.68349 6.74404 6.29297 6.35352L1.29297 1.35352"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      {isActive && (
        <div className={styles.main_content}>
          {allCharacters.length > 0 ? (
            allCharacters.map((character) => (
              <div className={styles.main_item}>
                <p>
                  {character.firstName}
                  {character.lastName}
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
