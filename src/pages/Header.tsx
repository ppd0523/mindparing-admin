import React from 'react';
import styles from "./Header.module.scss";
import './Header.module.scss';
import {dbContext} from "../components/DBProvider";

function Header() {
  const context = React.useContext(dbContext);
  return (
    <header>
      <h1>context: {context}</h1>
    </header>
  );
}

export default Header;
