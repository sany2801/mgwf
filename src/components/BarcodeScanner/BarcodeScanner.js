import React, { useEffect, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

const BarcodeScanner = () => {
  const [scannedData, setScannedData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let codeReader = null;

  useEffect(() => {
    codeReader = new BrowserMultiFormatReader();
    const videoElement = document.getElementById('video');
    let active = true;

    // Запуск непрерывного сканирования
    const startScanning = async () => {
      try {
        await codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
          if (result) {
            setScannedData(result.text);
          }
          if (err) {
            console.error('Scanning error:', err);
            setErrorMessage('Error while scanning');
          }
        });
      } catch (err) {
        console.error('Error during scan:', err);
        setErrorMessage('Error starting scanner');
      }
    };

    if (active) {
      startScanning();
    }

    // Остановка работы видеопотока при размонтировании компонента
    return () => {
      if (codeReader) {
        codeReader.stopContinuousDecode();  // Останавливаем декодирование
        codeReader = null;
      }
    };
  }, []);

  return (
    <div>
      <h1>Scan a barcode</h1>
      <video id="video" width="300" height="200" style={{ border: '1px solid black' }}></video>
      <p>Scanned Data: {scannedData}</p>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default BarcodeScanner;
