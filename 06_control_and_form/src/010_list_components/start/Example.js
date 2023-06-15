const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li key={animal}>{animal}</li>);
  }
  const helloAnimals = animals.map((animal) => <li>Heelo,{animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>{animalList}</ul>
      <ul>{helloAnimals}</ul>
      <ul>
        {animals.map((animal) => (
          <li>Heelo,{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
