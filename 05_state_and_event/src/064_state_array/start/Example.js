import { useState } from 'react';
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const shuffle = () => {
    const newNUms = [...nums];
    const popedValue = newNUms.pop();
    newNUms.unshift(popedValue);

    setNums(newNUms);
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
