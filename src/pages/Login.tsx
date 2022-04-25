import React from 'react';
import main from "./Main";
import LoginForm from "../components/LoginForm";
import style from './Login.module.scss'


function Login() {
  return (
    <main>
      <div className={style.login}>
        <LoginForm/>
      </div>
    </main>
  );
}

export default Login;
