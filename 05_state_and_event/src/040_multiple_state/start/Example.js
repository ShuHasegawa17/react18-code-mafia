import { useState } from 'react';
const Example = () => {
  console.log(<Example />);
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(10);
  const [valC, setValC] = useState(100);
  return (
    <>
      <p> ボタンを{valA}回押しました</p>
      <button onClick={() => setValA(valA + 1)}>ボタンA</button>
      <p> {`ボタンを${valB}回押しました`}</p>
      <button onClick={() => setValB(valB + 1)}>ボタンB</button>
      <p> {`ボタンを${valC}回押しました`}</p>
      <button onClick={() => setValC(valC + 1)}>ボタンC</button>
    </>
  );
};

export default Example;
