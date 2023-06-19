import { useState } from 'react';
import List from './List';
import Form from './Form';

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ];
  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos
      .filter((todo) => todo.id !== id)
      .map((todo) => ({ ...todo }));
    setTodos(newTodos);
  };
  const addTodo = (value) => {
    setTodos((prev) => [...prev, { id: Math.random() * 1000, content: value }]);
  };
  return (
    <>
      <h2>Remainder</h2>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form addTodo={addTodo} />
    </>
  );
};

export default Todo;
