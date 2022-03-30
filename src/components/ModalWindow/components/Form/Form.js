import React, { useState } from "react";
import DropList from "./components/DropList/DropList";
import styles from "./styles/form.module.css";
import christ from "../../../../assets/images/christ.svg";

const Form = ({
  setSubmit,
  onCloseModal,
  email,
  setEmail,
  selected,
  setSelected,
  allCharacters,
  setSubmitImgUrl,
  emailDirty,
  setEmailDirty,
  characterDirty,
  setCharacterDirty,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [emailError, setEmailError] = useState("Емейл не может быть пустым");
  const [characterError, setCharacterError] = useState("Выбери персонажа");
  const onClickSubmit = () => {
    setSubmitImgUrl(
      allCharacters.filter((character) => character.fullName === selected)[0]
        .imageUrl
    );
    setSubmit(true);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value === "") {
      setEmailError("Емейл не может быть пустым");
    } else if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неккоректный емейл");
    } else setEmailError("");
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <p>Please fill the form</p>
        <div className={styles.close_btn} onClick={onCloseModal}>
          <img src={christ} alt="button"></img>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.main_content}>
        <div className={styles.input_wrap}>
          {emailDirty && emailError && (
            <div className={styles.error}>{emailError}</div>
          )}
          <input
            name="email"
            type="text"
            className={styles.txt_input}
            placeholder="Enter your E-mail address"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailHandler(e)}
            value={email}
          ></input>
        </div>
        <div className={styles.input_wrap}>
          {characterDirty && characterError && (
            <div className={styles.error}>{characterError}</div>
          )}
          <DropList
            selected={selected}
            setSelected={setSelected}
            allCharacters={allCharacters}
            isActive={isActive}
            setIsActive={setIsActive}
            characterDirty={characterDirty}
            setCharacterDirty={setCharacterDirty}
            setCharacterError={setCharacterError}
          />
        </div>

        <button
          className={styles.sub_btn}
          onClick={onClickSubmit}
          disabled={selected === "" || emailError !== ""}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
