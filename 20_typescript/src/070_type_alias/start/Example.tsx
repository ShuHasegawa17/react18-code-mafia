const Example = () => {
  type UserGender = 'man' | 'woman' | 'other';
  type User = {
    name: string;
    age: number;
    gender: UserGender;
  };

  const user: User = { name: 'taro', age: 40, gender: 'man' };
};

export default Example;
