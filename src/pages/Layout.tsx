import React from 'react';
import {
  Outlet
} from "react-router-dom";
import Nav from "../components/Nav";
import Header from "./Header";


function Layout() {
  return (
    <>
      <Nav/>
      <Header/>
      <Outlet/>
    </>
  );
}

export default Layout;