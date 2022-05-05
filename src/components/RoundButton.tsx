import React, {
    ReactNode,
    MouseEvent,
} from 'react';
import cls from 'classnames';
import style from './RoundButton.module.scss';


interface IStyledButton {
    className?: string,
    children?: ReactNode,
    style?: any,
    height?: number,
    width?: number,
    onClick: (event: MouseEvent<HTMLButtonElement>)=>void,
}
function RoundButton(props: IStyledButton) {
    return (
        <>
            <button
                className={cls(props.className, 'text-xl')}
                style={{height: props.height, width: props.width}}
                onClick={props.onClick}>
                {props.children}
            </button>
        </>
    );
}

export default RoundButton;