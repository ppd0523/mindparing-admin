import React from 'react';
import { NavLink } from "react-router-dom";
import "./Nav.module.scss";
import styles from "./Nav.module.scss";

function Nav() {
  const activate = ({isActive}: {isActive: boolean})=>(
    isActive ? styles.active : undefined
  );

  return (
    <nav>
      <ul>
        <li><NavLink className={activate} to="/home">HOME</NavLink></li>
        <li><NavLink className={activate} to="/login">LOGIN</NavLink></li>
        <li><NavLink className={activate} to="/asdf">LOGIN</NavLink></li>
        <li><NavLink className={activate} to="/fdsa">LOGIN</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;