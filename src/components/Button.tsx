import React from 'react';
import style from "./Button.module.scss";
import classnames from "classnames";

interface IButton {
  children?: string
}
function Button({children}: IButton) {
  return (
    <button className={classnames(style.btn, style.text)}>{children}</button>
  );
}

export default Button;
