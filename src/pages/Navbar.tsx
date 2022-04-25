import React from 'react';
import cls from 'classnames';
import "./Navbar.module.scss";
import styles from './Navbar.module.scss';
import LoginButton from "../components/LoginButton";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <ul>
        <hr/>
        <p className={cls('text-m', 'text-bold', styles['text-gray'])}>커뮤니티 관리</p>
        <NavLink to="users"><li className={cls('text-l', 'text-bold')}>회원목록</li></NavLink>
        <NavLink to="posts"><li className={cls('text-l', 'text-bold')}>게시글 목록</li></NavLink>
        <NavLink to="write/magazine"><li className={cls('text-l', 'text-bold')}>매거진 글쓰기</li></NavLink>
        <NavLink to="magazines"><li className={cls('text-l', 'text-bold')}>매거진 목록</li></NavLink>
        <hr/>
        <p className={cls('text-m', 'text-bold', styles['text-gray'])}>시스템관리</p>
        <NavLink to="notices"><li className={cls('text-l', 'text-bold')}>공지사항</li></NavLink>
        <NavLink to="gnas"><li className={cls('text-l', 'text-bold')}>Q&A</li></NavLink>
        <NavLink to="manage/coupons"><li className={cls('text-l', 'text-bold')}>쿠폰관리</li></NavLink>
      </ul>
        <LoginButton/>
    </nav>
  );
}

export default Navbar;
