import { useEffect, useState } from 'react';

const Example = () => {
  const [state, setState] = useState(0);

  useEffect(
    function update() {
      console.log('update2');

      return function cleanUp() {
        console.log('update cleanup2');
      };
    },
    [state]
  );

  useEffect(() => {
    console.log('mount2');
    return () => {
      console.log('mount cleanup2');
    };
  }, []);

  console.log('render2');

  return (
    <>
      <h3>useEffectの呼ばれるタイミングをコンソールで確認してみよう</h3>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
    </>
  );
};

export default Example;
