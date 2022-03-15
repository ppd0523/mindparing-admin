import React from 'react';
import style from "./Navbar.module.scss";
import classnames from "classnames";

function Navbar() {
  return (
    <aside className={style.nav}>
      <ul className={classnames(style.list, style.text)}>
        <li className={style.item}>HTML</li>
        <li className={style.item}>CSS</li>
        <li className={style.item}>Javascript</li>
      </ul>
    </aside>
  );
}

export default Navbar;
