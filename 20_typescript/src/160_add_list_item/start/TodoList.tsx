import type { Todo } from './Example';
type TodoProps = {
  todos: Todo[];
};

const TodoList: React.FC<TodoProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
