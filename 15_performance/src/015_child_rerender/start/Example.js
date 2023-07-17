import { useState } from 'react';
import Child from '../end/Child';

const Example = () => {
  console.log('parent render2');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  return (
    <>
      <h3>再レンダリング</h3>
      <p>
        親コンポーネントが再レンダリングされると子コンポーネントも再レンダリングされる
      </p>
      <p>コンソールを要確認</p>
      <div className="parent">
        <div>
          <h3>親コンポーネント領域</h3>
          <div>
            <button
              onClick={() => {
                setCountA((prev) => prev + 1);
              }}
            >
              ボタンA
            </button>
            <span>親のstate更新</span>
          </div>

          <div>
            <button
              onClick={() => {
                setCountB((prev) => prev + 1);
              }}
            >
              ボタンB
            </button>
            <span>子のstate更新</span>
          </div>

          <div>
            <Child countB={countB} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
