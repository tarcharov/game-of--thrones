import Header from "./components/Header/Header";
import Places from "./components/Places/Places";
import Characters from "./components/Characters/Characters";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import Form from "./components/Form/Form";
import React from "react";

function App() {
  return (
    // Создаем глобальный div контейнер в котором размещаем наш первый компонент главной страницы
    <div>
      <ModalWindow>
        <Form />
      </ModalWindow>
      <Header />
      <Places />
      <Characters />
    </div>
  );
}

export default App;
