import { useMemo } from 'react';

const Child = ({ countB, onClick }) => {
  console.log('%cChild render2', 'color: red;');

  return useMemo(() => {
    console.log('%cuseMemo2', 'color: green;');
    <div className="child">
      <h2>子コンポーネント領域</h2>
      <button onClick={onClick}>ボタンB</button>
      <p>ボタンBクリック回数：{countB}</p>
    </div>;
  }, [onClick]);
};

export default Child;
