import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


function Layout() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
