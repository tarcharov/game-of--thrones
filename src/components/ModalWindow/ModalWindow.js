import React from "react";
import styles from "./styles/modal.module.css";
const ModalWindow = ({ children }) => {
  return (
    <div className={[styles.modalWindow, styles.activ].join(" ")}>
      <div className={styles.modalWindowContent}>{children}</div>
    </div>
  );
};
export default ModalWindow;
