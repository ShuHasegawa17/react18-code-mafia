import { useState } from 'react';

const Example = () => {
  const animals = ['Dog', 'Cat', null, 'Rat'];

  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? '';
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            console.log(animalStr.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => (
            <li key={animal}>
              {animal ?? 'null or undefined!!'}
              {animal === 'Dog' && '★'}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
