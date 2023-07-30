import { useState } from 'react';
import TodoList from './TodoList';

export type Todo = {
  id: number;
  text: string;
};
const Example = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Todo1' },
    { id: 2, text: 'Todo2' },
  ]);
  const [value, setValue] = useState<string>('');

  const addTodo = () => {
    setTodos((todos) => [...todos, { id: todos.length + 1, text: value }]);
    setValue('');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={changeHandler} value={value} />
      <button onClick={addTodo}>ボタン</button>

      <TodoList todos={todos}></TodoList>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul> */}
    </>
  );
};

export default Example;
