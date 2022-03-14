import React from 'react';
import './App.css';
import Tag from "./components/Tag";

function App(){
  const onEdit = ()=>{
    console.log('double click');
  }

  const onDelete = ()=>{
    console.log('click delete');
  }

  return (
    <>
      <Tag onEdit={onEdit} onDelete={onDelete} tagId={1}>page1</Tag>
      <Tag onEdit={onEdit} onDelete={onDelete} tagId={1}>page1</Tag>
    </>
  );
}

export default App;
