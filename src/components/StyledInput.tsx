import React, {ChangeEvent} from 'react';
import cls from 'classnames';

import './StyledInput.module.scss';
import style from './StyledInput.module.scss';

interface IStyledInput {
    className?: string;
    type?: string;
    placeholder?: string;
    onChange?: (event:ChangeEvent<HTMLInputElement>)=>void;
    value?: any;
}
function StyledInput(props: IStyledInput) {
    return (
        <>
            <input
                className={cls(props.className, )}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </>
    );
}

export default StyledInput;