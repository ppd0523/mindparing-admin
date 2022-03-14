import React from 'react';
import style from './Tag.module.scss';
import {CgClose, CgCheck} from "react-icons/cg";
import {GrCheckmark} from "react-icons/gr";


interface ITag {
  tagId: number,
  onEdit: ()=>void,
  onDelete: ()=>void,
  children: string,
}
function Tag({onEdit, onDelete, tagId, children}: ITag) {
  const [editable, setEditable] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>(children);
  const [width, setWidth] = React.useState<number>(children.length);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(()=>{
    inputRef.current?.focus();
  }, [editable])

  const onClickCheck = ()=>{
    console.log('check')
    setEditable(prev=>!prev);
  }
  const onClickClose = ()=>{
    console.log('close')
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
    setWidth(e.target.value.length);
  }
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    if( e.key === 'Enter') setEditable(prev=>!prev);
  }
  const onDoubleClick = (e: React.MouseEvent<HTMLSpanElement>)=>{
    setEditable(prev=>!prev);
    setWidth(text.length);
  }
  return (
    <div className={style.container}>
      {editable ?
        <>
          <input type="text" ref={inputRef} autoComplete="off"
                 className={style.text}
                 style={{width: width+'ch'}}
                 onChange={onChange}
                 onKeyPress={onKeyPress}
                 value={text}/>
          <button className={style.btn} onClick={onClickCheck}><GrCheckmark size="1.75em"/></button>
        </> :
        <>
          <span className={[style.tag, style.text].join(' ')}
                onDoubleClick={onDoubleClick}>{text}</span>
          <button className={style.btn} onClick={onClickClose}><CgClose size="1.75em"/></button>
        </>}
    </div>
  );
}

export default Tag;
