import React from "react";
import style from "./ModalPopap.module.css";

const ModalPopap = ({
  deletePadding,
  active,
  setActive,
  children,
  disableClosing,
  className,
}) => {
  return (
    <div
      className={active ? `${style.modal} ${style.active} ` : `${style.modal}`}
      onClick={disableClosing ? () => {} : () => setActive(false)}
    >
      <div
        style={deletePadding ? {padding: "0px"} : {}}
        className={
          active
            ? `${style.modal__content} ${style.active}`
            : `${style.modal__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        {disableClosing ? null : (
          <div
            className={style.btn_closse_popap}
            onClick={() => setActive(false)}
          >
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalPopap;
