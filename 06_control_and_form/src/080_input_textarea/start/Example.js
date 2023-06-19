import { useState } from 'react';

const Example = () => {
  const [val, setVal] = useState('');
  const clear = () => {
    setVal('');
  };
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <div>
        <label htmlFor="456">ラベル</label>
        <div>
          <input
            id="123"
            placeholder="hello"
            value={val}
            autoComplete="on"
            onChange={(e) => setVal(e.target.value)}
          />
          <textarea
            id="456"
            placeholder="hello"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          ></textarea>
        </div>
        <h3>{val}</h3>
        <button onClick={clear}>クリア</button>
      </div>
    </>
  );
};

export default Example;
