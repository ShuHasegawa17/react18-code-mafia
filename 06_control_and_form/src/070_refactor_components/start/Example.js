import { useState } from 'react';
import AnimalList from './components/AnimalList';
import AnimalFilter from './components/AnimalFilter';

const Example = () => {
  const animals = ['Dog', 'Cat', 'Rat'];

  const [filterVal, setFilterVal] = useState('');

  const filterAnmals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterAnmals} />
    </>
  );
};

export default Example;
