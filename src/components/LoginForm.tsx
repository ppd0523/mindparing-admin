import React from 'react';
import './LoginForm.module.scss';
import cls from 'classnames';
import style from './LoginForm.module.scss'


function LoginForm() {
  return (
    <div className={style.container}>
      <span className={cls(style['id-label'], 'text-l')}>ID</span>
      <input className={cls(style['id-input'])} type="text" placeholder="ID"/>

      <span className={cls(style['pw-label'], 'text-l')}>PW</span>
      <input className={cls(style['pw-input'])} type="password" placeholder="PASSWORD"/>

      <span className={cls(style['error-text'], 'text-s')}>{"비밀번호가 일치하지 않습니다"}</span>
      <button className={cls(style['login-btn'], 'text-l', 'text-bold')}>로그인</button>
      <button className={cls(style['join-btn'], 'text-l', 'text-bold')}>회원가입</button>
    </div>
  );
}

export default LoginForm;