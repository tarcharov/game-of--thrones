import React from "react";
import DropList from "../DropList/DropList";
import styles from "./styles/form.module.css";
const Form = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <p>Please fill the form</p>
        <div className={styles.close_btn}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M1.75781 10.2427L10.2431 1.75745M1.75781 1.75745L10.2431 10.2427"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      <div className={styles.line}></div>
      <div className={styles.main_content}>
        <input
          type="text"
          className={styles.txt_input}
          placeholder="Enter your E-mail address"
        ></input>
        <DropList />
        <button className={styles.sub_btn}>Submit</button>
      </div>
    </div>
  );
};
export default Form;
