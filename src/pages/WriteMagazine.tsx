import React, {useState} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


function WriteMagazine() {
  const [value, setValue] = useState<string>('');
  return (
    <main>
      <ReactQuill value={value} onChange={setValue}/>

    </main>
  );
}

export default WriteMagazine;