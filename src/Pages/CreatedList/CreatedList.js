import "react-image-gallery/styles/css/image-gallery.css";

import React, {useState, useEffect} from "react";
import ImageGallery from "react-image-gallery";
import Barcode from "react-barcode";

const CreatedList = () => {
  const [list, setList] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem("AddList");
    if (savedList) {
      const parsedList = JSON.parse(savedList);
      setList(parsedList); // Парсим строку из localStorage в массив
    }
  }, []); // Выполняется только один раз при монтировании компонента

  return (
    <div>
      <h1>CreatedList with Barcodes</h1>
      {list.length > 0 ? (
        list.map((item) => (
          <>
            <Barcode
              renderer="svg"
              fontSize={20}
              width={1.2}
              height={100}
              value={item.Barcode}
              format="CODE128"
            />
          </>
        ))
      ) : (
        <p>Список пуст</p>
      )}
    </div>
  );
};

export default CreatedList;
