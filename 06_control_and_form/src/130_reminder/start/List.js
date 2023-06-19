const List = ({ todos, deleteTodo }) => {
  const handleClick = (id) => {
    deleteTodo(id);
  };

  return (
    <>
      {todos.map((t) => (
        <div key={t.id}>
          <button onClick={() => handleClick(t.id)}>完了</button>
          {t.content}
        </div>
      ))}
    </>
  );
};

export default List;
