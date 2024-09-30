import React, {useState} from "react";
import style from ".//ItemPage.module.css";
import {useParams} from "react-router";
import Data from "..//../Data/Data.json";
import Barcode from "react-barcode";

const ItemPage = () => {
  const {nameCategory} = useParams();
  const {name} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false); // можно добавить логику обработки ошибки
  };

  Data[nameCategory].map((item) => {
    if (item.Name === name) {
    }
  });

  return (
    <div>
      {Data[nameCategory].map((item) => {
        if (item.Name === name) {
          return <h1> {item.Name + " " + item.Volume + "л"}</h1>;
        }
      })}
      <div className={style.Barcode}>
        {Data[nameCategory].map((item) => {
          if (item.Name === name) {
            return (
              <div key={Math.random()}>
                <Barcode
                  renderer="svg"
                  fontSize={20}
                  width={1.2}
                  height={100}
                  value={item.Barcode}
                  format="CODE128"
                />
              </div>
            );
          }
        })}
      </div>

      {Data[nameCategory].map((item) => {
        if (item.Name === name) {
          return (
            <div className={style.photo}>
              {isLoading && (
                <>
                  <div className={style.loader}></div>
                  <p>Загрузка фото ...</p>
                  {/* Здесь можешь вставить любой компонент лоадера */}
                </>
              )}
              <img
                src={`${item.images}`}
                alt={`${item.Name}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={
                  isLoading
                    ? {display: "none"}
                    : {display: "block", width: "200px", height: "aduto"}
                }
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ItemPage;
