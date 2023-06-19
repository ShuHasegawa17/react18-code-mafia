import { useState } from 'react';

const Form = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
