import React, {useState, useEffect} from "react";
import Data from "..//../Data/Data.json";
import {useNavigate, useParams} from "react-router";

const ListCategory = () => {
  const navigate = useNavigate();
  const {nameCategory} = useParams();

  const [AddList, setAddlList] = useState(() => {
    // Инициализация состояния из localStorage
    const savedList = localStorage.getItem("AddList");
    return savedList ? JSON.parse(savedList) : [];
  });
  useEffect(() => {
    localStorage.setItem("AddList", JSON.stringify(AddList));
  }, [AddList]);

  const AddToList = (i) => {
    setAddlList((prev) => [...prev, i]);
  };

  return (
    <div>
      <h1>{nameCategory}</h1>
      <ul>
        {Data[nameCategory].map((item) => (
          <>
            <li key={Math.random()} onClick={() => navigate(item.Name)}>
              {`${item.Name} ${item.Volume} л`}
            </li>
            <button d onClick={() => AddToList(item)}>
              +
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
