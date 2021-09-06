import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import Card from "./components/Card";
import styles from "./styles/mainPage.module.css";

const MainPage = () => {
  /* useState делает так, что мы асинхронно можем получать и записывать значения, где первый параметр отвечает за чтение
    значений, а второй - за запись значений, которые асинхронно будут доступны в первом*/
  /* В правых скобочках указано изначальное значение, поскольку с сервера приходит массив, то изначально это просто пустой
    массив */
  const [allCharacters, setAllCharacters] = useState([]);

  // useEffect позволяет вызывать то, что в нем находится в момент рендера компонента
  useEffect(() => {
    // Здесь собственно сам запрос на сервер и получение результата с его записью в useState
    fetchData("Characters").then((result) => setAllCharacters(result));

    /*В [] можно указывать зависимости, при которых будет выполняться код выше, если их не передать, то функция будет
        срабатывать только при первом рендере компонента, если не передавать массив вовсе, то при каждом рендере
        будет выполняться код выше*/
  }, []);

  return (
    <div>
      {/* В реакте всегда используется className, а не class, в него мы размещаем объект со стилями и берем у него класс
            container */}
      <div className={styles.container}>
        {/* Проверка на длину массива, если пустой - пишем, что персонажей нет */}
        {allCharacters.length > 0 ? (
          // Проходимся по массиву и для каждого элемента рисуем компонент карточки, передаем туда имя и фамилию
          allCharacters.map((character) => (
            <Card
              firstName={character.firstName}
              lastName={character.lastName}
              imageUrl={character.imageUrl}
            />
          ))
        ) : (
          <p>Персонажей нет</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
