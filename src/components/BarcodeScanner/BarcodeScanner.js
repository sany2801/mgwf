import React, {useEffect, useState} from "react";
import {BrowserMultiFormatReader} from "@zxing/browser";
import Data from "../../Data/Data.json";
import {useNavigate} from "react-router";

const BarcodeScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let codeReader = null;
  const navigate = useNavigate();

  const FindeItem = (item) => {
    for (const key in Data) {
      const itemBardcod = Data[key].find(
        (itemBardcod) => itemBardcod.Barcode === item
      );
      if (itemBardcod) {
        navigate(`/mgwf/pageItem/${key}/${itemBardcod.Name}`);
        return;
      }
    }
  };

  useEffect(() => {
    codeReader = new BrowserMultiFormatReader();
    const videoElement = document.getElementById("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const startScanning = async () => {
      try {
        await codeReader.decodeFromVideoDevice(
          null,
          videoElement,
          (result, err) => {
            if (result) {
              setScannedData(result.text);
              FindeItem(result.text);
            }
            if (err) {
              console.error("Scanning error:", err);
              setErrorMessage("Error while scanning");
            }
          }
        );
      } catch (err) {
        console.error("Error during scan:", err);
        setErrorMessage("Error starting scanner");
      }
    };

    startScanning();

    return () => {
      // Завершаем процесс сканирования при размонтировании компонента
      if (codeReader) {
        if (typeof codeReader.stopContinuousDecode === "function") {
          codeReader.stopContinuousDecode();
        } else if (typeof codeReader.reset === "function") {
          codeReader.reset();
        }
        codeReader = null;
      }
    };
  }, []);

  return (
    <div style={{position: "relative", height: "100vh", width: "100vw"}}>
      {/* Видео будет на весь экран */}
      <video
        id="video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      ></video>

      {/* Центральная область для сканирования */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "300px",
          height: "300px",
          transform: "translate(-50%, -50%)",
          border: "4px solid red",
          zIndex: 2,
          boxSizing: "border-box",
        }}
      ></div>

      <p
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "white",
          zIndex: 3,
        }}
      >
        Scanned Data: {scannedData}
      </p>

      {errorMessage && (
        <p
          style={{
            position: "absolute",
            top: "50px",
            left: "10px",
            color: "red",
            zIndex: 3,
          }}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default BarcodeScanner;
