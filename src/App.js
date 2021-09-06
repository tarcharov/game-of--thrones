import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import React from "react";

function App() {
  return (
    // Создаем глобальный div контейнер в котором размещаем наш первый компонент главной страницы
    <div>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
