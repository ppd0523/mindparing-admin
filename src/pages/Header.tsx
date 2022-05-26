import React from 'react';
import cls from 'classnames';
import './Header.module.scss';
import style from './Header.module.scss';
import {
    useServer,
    usePageStatus,
} from "../components/DataProvider";
import {
    AiOutlineRight,
} from 'react-icons/ai';
import {useNavigate} from "react-router-dom";


function Header() {
  const connection = useServer();
  const pageStatus = usePageStatus();
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1 className={cls(style.title, 'text-xxxl')}>{pageStatus.currentPage}</h1>
        <div
            onClick={()=>{navigate(-1)}}
            className={cls(style.backBtn, 'text-xxxl')}>BACK<AiOutlineRight style={{}}/></div>
      </header>
    </>
  );
}

export default Header;
