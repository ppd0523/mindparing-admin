import React from 'react';
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import Navbar from "./Navbar";
import Header from "./Header";
import Button from "../components/Button";


function Layout() {
  return (
    <div className={style.container}>
      <Navbar/>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default Layout;
