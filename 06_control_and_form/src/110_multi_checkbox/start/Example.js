import { useState } from 'react';

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: 'Apple', value: 100, checked: false },
    { label: 'Banana', value: 200, checked: false },
    { label: 'Cherry', value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleCHange = (e) => {
    const newFruits = fruits.map((f) => {
      const newFruit = { ...f };
      if (f.label === e.target.value) {
        newFruit.checked = !newFruit.checked;
      }
      return newFruit;
    });

    setFruits(newFruits);
    //let sumVal = 0;
    // newFruits.forEach((f) => {
    //   if (f.checked) {
    //     sumVal += f.value;
    //   }
    // });
    const sumVal = newFruits
      .filter((f) => f.checked)
      .reduce((sumVal, f) => sumVal + f.value, 0);

    setSum(sumVal);
  };

  return (
    <div>
      {fruits.map((f) => {
        return (
          <div key={f.label}>
            <input
              id={f.label}
              type="checkbox"
              value={f.label}
              checked={f.checked}
              onChange={handleCHange}
            />
            <label htmlFor={f.label}>
              {f.label}:{f.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
