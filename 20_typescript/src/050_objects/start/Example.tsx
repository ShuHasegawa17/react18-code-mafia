const Example = () => {
  // 練習用
  const array: Array<number> = [1, 2, 3];
  const array2: (number | string)[] = [1, 2, 3];

  const obj1: { name: string; age?: number } = {
    name: 'taro',
  };

  type Person = { name: string; age: number };
  const users: Person[] = [
    { name: 'taro', age: 30 },
    { name: 'hanaoko', age: 20 },
  ];
};

export default Example;
