import React, { useEffect } from "react";
import styles from "./styles/on_submit_form.module.css";

const OnSubmitForm = ({ submitImgUrl, onCloseModal }) => {
  useEffect(() => {
    console.log("KUKU");
    document.addEventListener("click", onCloseModal);
    return () => {
      document.removeEventListener("click", onCloseModal);
    };
  }, [onCloseModal]);
  return (
    <div className={styles.main} onClick={(e) => e.stopPropagation()}>
      <img src={submitImgUrl} alt="characterImg"></img>
      <h1>Congratulations!</h1>
      <p>You’ve picked your character!</p>
      <p>We will contact you by email you provided</p>
    </div>
  );
};
export default OnSubmitForm;
