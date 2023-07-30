import { useState } from 'react';

type Todo = {
  id: number;
  text: string;
};

type User = {
  name: string;
  age: number;
};
const Example = () => {
  const [text, setText] = useState('hello');
  useState(0);

  const [animals, setAnimals] = useState<string[]>(['dog', 'cat']);
  const [users, setUsers] = useState<User[]>([
    { name: 'tro', age: 20 },
    { name: 'jiro', age: 10 },
  ]);

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'food' },
    { id: 2, text: 'book' },
  ]);
};

export default Example;
