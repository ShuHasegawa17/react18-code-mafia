import { useState } from 'react';
const Example = () => {
  // [現在の値, 更新関数] = 初期値
  const [val, setVal] = useState(0);
  return (
    <>
      <input type="text" onChange={(e) => setVal(e.target.value)} /> = {val}
    </>
  );
};

export default Example;
