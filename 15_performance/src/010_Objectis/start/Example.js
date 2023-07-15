import { useState } from 'react';
const Example = () => {
  console.log('render1');
  const [countA, setCountA] = useState({
    value: 0,
  });

  const obj1 = { val: 0 };
  const obj2 = obj1;
  const isSame = Object.is(obj1, obj2);
  console.log(isSame);
  return (
    <>
      <h3>再レンダリングが発生する条件</h3>
      <p>stateの値が変更された時</p>
      <p>Object.isによって変更は検知される</p>
      <div className="parent">
        <div>
          <h3>再レンダリング？</h3>
          <button
            onClick={() =>
              setCountA((prev) => {
                const newState = { ...prev };
                //prev.val += 1;
                return newState;
              })
            }
          >
            ボタンA
          </button>
          <p>ボタンAクリック： {countA.value}</p>
        </div>
      </div>
    </>
  );
};

export default Example;
