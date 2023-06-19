import { useState } from 'react';

const OPTOINS = ['apple', 'banana', 'cherry'];
const Example = () => {
  const [selected, setSelected] = useState('banana');
  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {OPTOINS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <div>選択された果物は：{selected}</div>
    </>
  );
};

export default Example;
