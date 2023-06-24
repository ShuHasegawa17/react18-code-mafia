import { useState } from 'react';
import './Example.css';
import SubButton from './components/SubButton';

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button
        className={`btn ${isSelected ? 'selected' : ''}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <button className="btn">サブ</button>
      <SubButton />

      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  );
};

export default Example;
