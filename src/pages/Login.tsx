import React from 'react';
import main from "./Main";
import LoginForm from "../components/LoginForm";
import style from './Login.module.scss'
import {usePageStatus} from "../components/DataProvider";


function Login() {
  const pageStatus = usePageStatus();
  pageStatus.currentPage = '로그인';
  return (
    <main className={style.container}>
        <LoginForm/>
    </main>
  );
}

export default Login;
