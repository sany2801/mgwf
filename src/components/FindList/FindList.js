import React, {useState} from "react";
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

  const OpenPopap = () => {
    setStatePopap(true);
  };

  return (
    <div>
      {listFindName && (
        <ul>
          {JSON.parse(localStorage.getItem("listFind")).map((item) => (
            <li
              key={Math.random()}
              onClick={() =>
                navigate(`/mgwf/pageItem/${item.category}/${item.item.Name}`)
              }
            >
              {item.item.Name + " " + item.item.Volume + "л"}
            </li>
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
