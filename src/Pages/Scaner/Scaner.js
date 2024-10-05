import React from "react";
import style from "./Scaner.module.css";
import BarcodeScanner from "../../components/BarcodeScanner/BarcodeScanner";

const Scaner = () => {
  return (
    <div className={style.wrapper}>
      <BarcodeScanner />
    </div>
  );
};

export default Scaner;
