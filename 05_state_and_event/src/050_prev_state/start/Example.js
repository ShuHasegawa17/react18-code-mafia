import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    // 値の更新は即時ではなく、再レンダリング後
    setCount(count + 1); // 0+1
    //setCount(count + 1); // 0+1
    setCount((prevestate) => prevestate + 1); // prevestateで非同期の値が取れる

    console.log(count);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>現在のカウント数： {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
