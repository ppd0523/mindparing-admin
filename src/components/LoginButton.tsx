import React from 'react';
import style from './LoginButton.module.scss';
import cls from 'classnames';

function LoginButton() {
    return (
        <>
            <button className={cls(style['login-btn'])}>LOGIN</button>
        </>
    );
}

export default LoginButton;