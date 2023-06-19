import { useState } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <div>
        <label htmlFor="checkbox">チェック：</label>
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
      </div>
      <h3>{checked ? 'ON' : 'OFF'}</h3>
    </>
  );
};

export default Example;
