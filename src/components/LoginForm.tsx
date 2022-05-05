import React from 'react';
import cls from 'classnames';

import './LoginForm.module.scss';
import style from './LoginForm.module.scss';

import RoundButton from "./RoundButton";
import StyledInput from "./StyledInput";


function LoginForm() {
  return (
    <div className={style['form-container']}>
      <span className={cls(style['id-label'], 'text-xxxl')}>ID</span>
      <StyledInput className={cls(style['id-input'], 'text-xxl')} type="text" placeholder="ID"/>

      <span className={cls(style['pw-label'], 'text-xxxl')}>PW</span>
      <StyledInput className={cls(style['pw-input'], 'text-xxl')} type="password" placeholder="PASSWORD"/>

      <span className={cls(style['error-text'], 'text-s')}>{"비밀번호가 일치하지 않습니다"}</span>
      <RoundButton className={cls(style['login-btn'], 'text-l', 'text-bold')} onClick={()=>{console.log('clicked 로그인 in login form')}}>로그인</RoundButton>
      <RoundButton className={cls(style['join-btn'], 'text-l', 'text-bold')} onClick={()=>{console.log('clicked 회원가입 in login form')}}>회원가입</RoundButton>
    </div>
  );
}

export default LoginForm;