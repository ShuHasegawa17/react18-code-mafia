import { useState } from 'react';
import { useTodoDispatch } from '../context/TodoContext';

const Item = ({ todo }) => {
  const dispatch = useTodoDispatch();
  const [editingContent, setEditingContent] = useState(todo.content);

  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, isEdit: !todo.isEdit };
    dispatch({ type: 'update', todo: newTodo });
  };
  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, isEdit: !todo.isEdit, content: editingContent };
    dispatch({ type: 'update', todo: newTodo });
  };
  const complete = (todo) => {
    dispatch({ type: 'delete', todo });
  };
  return (
    <div>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: 'inline' }}>
        {todo.isEdit ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
