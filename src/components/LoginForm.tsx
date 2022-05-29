import React, {ChangeEvent, useState} from 'react';
import cls from 'classnames';

import './LoginForm.module.scss';
import style from './LoginForm.module.scss';

import RoundButton from "./RoundButton";
import StyledInput from "./StyledInput";
import {useServer} from "./DataProvider";
import axios from "axios";


function LoginForm() {
  const server = useServer();
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');

  const onChange_userId = (e: ChangeEvent<HTMLInputElement>)=>{
    setUserId(e.currentTarget.value)
  }
  const onChange_userPw = (e: ChangeEvent<HTMLInputElement>)=>{
    setUserPw(e.currentTarget.value)
  }
  const onClick = async ()=>{
    console.log('clicked');
    const SERVER_URL = "http://ec2-3-35-99-11.ap-northeast-2.compute.amazonaws.com:8080"
    const res = await axios.post(
      `${SERVER_URL}/v1/admin/login`,
      {id: 'admin', hashed_passwd: 'admin'}
    );
    console.log(res);
  }
  return (
    <div className={style['form-container']}>
      <span className={cls(style['id-label'], 'text-xxxl')}>ID</span>
      <StyledInput className={cls(style['id-input'], 'text-xxl')}
                   onChange={onChange_userId}
                   type="text"
                   placeholder="ID"
                   value={userId}/>

      <span className={cls(style['pw-label'], 'text-xxxl')}>PW</span>
      <StyledInput className={cls(style['pw-input'], 'text-xxl')}
                   id="userPw"
                   onChange={onChange_userPw}
                   type="password"
                   placeholder="PASSWORD"
                   value={userPw}/>

      <span className={cls(style['error-text'], 'text-s')}>{"비밀번호가 일치하지 않습니다"}</span>
      <RoundButton className={cls(style['login-btn'], 'text-l', 'text-bold')} onClick={()=>server.login(userId, userPw)}>로그인</RoundButton>
      <RoundButton className={cls(style['join-btn'], 'text-l', 'text-bold')} onClick={()=>{console.log('clicked 회원가입 in login form')}} disabled>회원가입</RoundButton>
      <button onClick={onClick}>fsadfasdf</button>
    </div>
  );
}

export default LoginForm;