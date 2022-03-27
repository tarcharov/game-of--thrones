import React, { useState } from "react";
import styles from "./styles/modal.module.css";
import Form from "./components/Form/Form";
import OnSubmitForm from "./components/OnSubmitForm/OnSubmitForm";

const ModalWindow = ({
  visible,
  setVisible,
  submit,
  setSubmit,
  allCharacters,
}) => {
  const rootClasses = [styles.modalWindow];

  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState("");
  const [submitImgUrl, setSubmitImgUrl] = useState();
  if (visible) {
    rootClasses.push(styles.activ);
  }

  const onCloseModal = () => {
    setEmail("");
    setSelected("");
    setVisible(false);
    setSubmit(true);
    console.log(submit);
  };
  return (
    <div className={rootClasses.join(" ")} onClick={onCloseModal}>
      <div
        className={styles.modalWindowContent}
        onClick={(e) => e.stopPropagation()}
      >
        {submit ? (
          <Form
            setSubmit={setSubmit}
            onCloseModal={onCloseModal}
            email={email}
            setEmail={setEmail}
            selected={selected}
            setSelected={setSelected}
            allCharacters={allCharacters}
            setSubmitImgUrl={setSubmitImgUrl}
          />
        ) : (
          <OnSubmitForm
            allCharacters={allCharacters}
            selected={selected}
            submitImgUrl={submitImgUrl}
          />
        )}
      </div>
    </div>
  );
};
export default ModalWindow;
