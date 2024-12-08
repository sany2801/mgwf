import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import style from "./FindList.module.css";
import ModalPopap from "../ModalPopap/ModalPopap";
import TelegramForm from "../Form/TelegramForm";
const FindList = () => {
  console.log(JSON.parse(localStorage.getItem("listFind")));
  const navigate = useNavigate();

  const [listFindName, setListFindName] = useState(
    localStorage.getItem("listFind")
  );
  const [statePopap, setStatePopap] = useState(false);
  const [addList, setAddList] = useState(() => {
    const savedList = localStorage.getItem("AddList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const addToList = (item) => {
    setAddList((prev) => [...prev, item]);
  };
  useEffect(() => {
    localStorage.setItem("AddList", JSON.stringify(addList));
  }, [addList]);
  const OpenPopap = () => {
    setStatePopap(true);
  };
  const isItemDisabled = (item) => {
    return addList.some((addedItem) => addedItem.Name === item.Name);
  };
  return (
    <div>
      {listFindName && (
        <ul>
          {JSON.parse(localStorage.getItem("listFind")).map((item) => (
            <div className={style.itemListWithBtn}>
              <li
                key={Math.random()}
                onClick={() =>
                  navigate(`/mgwf/pageItem/${item.category}/${item.item.Name}`)
                }
              >
                {item.item.Name + " " + item.item.Volume + "л"}
              </li>
              <button
                className={style.btnAdd}
                disabled={isItemDisabled(item)} // Проверяем состояние кнопки
                onClick={() => addToList(item)}
              >
                {isItemDisabled(item) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#1a6dff"
                      d="M24.982,51c-1.273,0-2.547-0.475-3.524-1.429L6.888,35.364C6.315,34.806,6,34.061,6,33.268 s0.315-1.538,0.889-2.097l2.82-2.75c1.166-1.137,3.063-1.137,4.228,0.001l10.259,10.003c0.395,0.385,1.058,0.38,1.446-0.012 l24.341-24.526c1.147-1.156,3.044-1.186,4.228-0.068l2.867,2.705c0.582,0.55,0.91,1.29,0.923,2.083 c0.013,0.793-0.291,1.542-0.854,2.109L28.565,49.514C27.584,50.504,26.283,51,24.982,51z"
                    ></path>
                  </svg>
                ) : (
                  "+"
                )}
              </button>
            </div>
          ))}
        </ul>
      )}
      <div className={style.wrapperNewObject}>
        <h2>К сожелению мы не смогли ничего найти.</h2>
        <button onClick={() => OpenPopap()}> Добавить новый товар</button>
      </div>
      <ModalPopap active={statePopap} setActive={setStatePopap}>
        <TelegramForm />
      </ModalPopap>
    </div>
  );
};

export default FindList;
