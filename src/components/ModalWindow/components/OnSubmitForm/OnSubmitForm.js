import React from "react";
import styles from "./styles/on_submit_form.module.css";

const OnSubmitForm = ({ submitImgUrl }) => {
  return (
    <div className={styles.main}>
      <img src={submitImgUrl}></img>
      <h1>Congratulations!</h1>
      <p>You’ve picked your character!</p>
      <p>We will contact you by email you provided</p>
    </div>
  );
};
export default OnSubmitForm;
