import React, {
    ReactNode,
    MouseEvent,
} from 'react';
import cls from 'classnames';
import './RoundButton.module.scss';
import style from './RoundButton.module.scss';


interface IStyledButton {
    className?: string,
    children?: ReactNode,
    style?: any,
    height?: number,
    width?: number,
    disabled?: boolean
    onClick: (event: MouseEvent<HTMLButtonElement>)=>void,
}
function RoundButton(props: IStyledButton) {
    return (
        <>
            <button
                className={cls(props.className, style['login-btn'], 'text-xl')}
                style={{height: props.height, width: props.width}}
                onClick={props.onClick}
                disabled={props.disabled ?? false}>
                {props.children}
            </button>
        </>
    );
}

export default RoundButton;