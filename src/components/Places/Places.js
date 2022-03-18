import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import Card from "./components/Card_p";
import styles from "./styles/places.module.css";
import esos from "../../assets/images/essos.jpg";
import westeros from "../../assets/images/westeros.jpg";
import sothoryos from "../../assets/images/sothoryos.jpg";
import ulthos from "../../assets/images/ulthos.png";

const Places = () => {
  const [allPlaces, setAllPlaces] = useState([]);
  const listImgPlaces = [westeros, esos, sothoryos, ulthos];
  useEffect(() => {
    fetchData("Continents").then((result) => setAllPlaces(result));
  }, []);

  return (
    <div className={styles.main}>
      <h1>PLACES</h1>
      <div className={styles.container}>
        {allPlaces.length > 0 ? (
          allPlaces.map((place) => (
            <Card name={place.name} imageUrl={listImgPlaces[place.id]} />
          ))
        ) : (
          <p>Континентов нет</p>
        )}
      </div>
    </div>
  );
};

export default Places;
