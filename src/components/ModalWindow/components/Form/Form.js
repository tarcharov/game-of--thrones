import React from "react";
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
}) => {
  const onClickSubmit = () => {
    setSubmitImgUrl(
      allCharacters.filter((character) => character.fullName === selected)[0]
        .imageUrl
    );
    setSubmit(false);
  };

  return (
    <div className={styles.main} id="modalWindow">
      <div className={styles.main_title}>
        <p>Please fill the form</p>
        <div className={styles.close_btn} onClick={onCloseModal}>
          <img src={christ} alt="button"></img>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.main_content}>
        <input
          type="text"
          className={styles.txt_input}
          placeholder="Enter your E-mail address"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        ></input>
        <DropList
          selected={selected}
          setSelected={setSelected}
          allCharacters={allCharacters}
        />
        <button
          className={styles.sub_btn}
          onClick={onClickSubmit}
          disabled={selected === "" && email === "" ? true : false}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
