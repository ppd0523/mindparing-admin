import React from 'react';
import "./Navbar.module.scss";
import LoginButton from "../components/LoginButton";


function Navbar() {
  return (
    <nav>
      <ul>
        <li className="text-l">Hello world!</li>
        <li className="text-l">Hello world!</li>
        <li className="text-l">Hello world!</li>
        <li className="text-l">Hello world!</li>
        <li className="text-l">Hello world!</li>
        <li className="text-l">Hello world!</li>
      </ul>
        <LoginButton/>
    </nav>
  );
}

export default Navbar;
