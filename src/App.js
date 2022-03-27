import Header from "./components/Header/Header";
import Places from "./components/Places/Places";
import Characters from "./components/Characters/Characters";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import { fetchData } from "./utils/fetchData";
import React, { useState, useEffect } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    fetchData("Characters").then((result) => setAllCharacters(result));
  }, []);

  return (
    <div>
      <ModalWindow
        visible={modal}
        setVisible={setModal}
        submit={submit}
        setSubmit={setSubmit}
        allCharacters={allCharacters}
      ></ModalWindow>
      <Header />
      <Places />
      <Characters
        setVisible={setModal}
        setSubmit={setSubmit}
        allCharacters={allCharacters}
      />
    </div>
  );
}

export default App;
