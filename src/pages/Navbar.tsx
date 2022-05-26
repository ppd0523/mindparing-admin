import React from 'react';
import cls from 'classnames';
import "./Navbar.module.scss";
import styles from './Navbar.module.scss';
import RoundButton from "../components/RoundButton";
import {NavLink, useNavigate} from "react-router-dom";
import {usePageStatus} from "../components/DataProvider";


function Navbar() {
  const pageStatus = usePageStatus();
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <hr/>
        <p className={cls('text-m', 'text-bold', 'text-gray')}>커뮤니티 관리</p>
        <NavLink to="users"><li className={cls('text-l', 'text-bold')}>회원목록</li></NavLink>
        <NavLink to="posts"><li className={cls('text-l', 'text-bold')}>게시글 목록</li></NavLink>
        <NavLink to="write/magazine"><li className={cls('text-l', 'text-bold')}>매거진 글쓰기</li></NavLink>
        <NavLink to="magazines"><li className={cls('text-l', 'text-bold')}>매거진 목록</li></NavLink>
        <NavLink to="reports"><li className={cls('text-l', 'text-bold')}>신고 목록</li></NavLink>
        <hr/>
        <p className={cls('text-m', 'text-bold', 'text-gray')}>시스템관리</p>
        <NavLink to="notices"><li className={cls('text-l', 'text-bold')}>공지사항</li></NavLink>
        <NavLink to="gnas"><li className={cls('text-l', 'text-bold')}>Q&A</li></NavLink>
        <NavLink to="manage/coupons"><li className={cls('text-l', 'text-bold')}>쿠폰관리</li></NavLink>
      </ul>
        {pageStatus.isLogin ?
          <RoundButton onClick={()=>{
            console.log('TODO logout api call')}}>LOGOUT</RoundButton> :
          <RoundButton onClick={()=>{navigate("login");}}>LOGIN</RoundButton> // 에러 남
        }

    </nav>
  );
}

export default Navbar;
