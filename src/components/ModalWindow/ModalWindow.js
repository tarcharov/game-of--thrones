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

  const [emailDirty, setEmailDirty] = useState(false);
  const [characterDirty, setCharacterDirty] = useState(false);

  if (visible) {
    rootClasses.push(styles.activ);
  }

  const onCloseModal = () => {
    setEmail("");
    setSelected("");
    setVisible(false);
    setSubmit(false);
    setEmailDirty(false);
    setCharacterDirty(false);
    console.log("loh");
  };
  return (
    <div className={rootClasses.join(" ")}>
      <div className={styles.modalWindowContent}>
        {submit ? (
          <OnSubmitForm
            onCloseModal={onCloseModal}
            allCharacters={allCharacters}
            selected={selected}
            submitImgUrl={submitImgUrl}
          />
        ) : (
          <Form
            setSubmit={setSubmit}
            onCloseModal={onCloseModal}
            email={email}
            setEmail={setEmail}
            selected={selected}
            setSelected={setSelected}
            allCharacters={allCharacters}
            setSubmitImgUrl={setSubmitImgUrl}
            emailDirty={emailDirty}
            setEmailDirty={setEmailDirty}
            characterDirty={characterDirty}
            setCharacterDirty={setCharacterDirty}
          />
        )}
      </div>
    </div>
  );
};
export default ModalWindow;
