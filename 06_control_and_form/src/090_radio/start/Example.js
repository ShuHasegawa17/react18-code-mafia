import { useState } from 'react';

const Example = () => {
  const RADIO_COLLECTION = ['apple', 'banana', 'cherry'];
  const [fluts, setFluts] = useState('apple');
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      {RADIO_COLLECTION.map((val) => {
        return (
          <label key={val}>
            <input
              type="radio"
              value={val}
              checked={fluts === val}
              onChange={(e) => setFluts(e.target.value)}
            />
            {val}
          </label>
        );
      })}
      <h3>私は{fluts}が食べたい</h3>
    </>
  );
};

export default Example;
