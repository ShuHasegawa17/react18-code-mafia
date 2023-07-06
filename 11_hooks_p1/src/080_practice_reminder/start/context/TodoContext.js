import { createContext, useContext, useReducer } from 'react';

const reducer = (todos, action) => {
  switch (action.type) {
    case 'create': {
      return [...todos, action.todo];
    }
    case 'delete': {
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    }

    case 'update': {
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    }
    default:
      throw new Error('operator is invalid');
  }
};

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
  {
    id: 1,
    content: '店予約する',
    isEdit: false,
  },
  {
    id: 2,
    content: '卵買う',
    isEdit: false,
  },
  {
    id: 3,
    content: '郵便出す',
    isEdit: false,
  },
];

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, todosList);
  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);
const useTodoDispatch = () => useContext(TodoDispatchContext);

export { TodoProvider, useTodo, useTodoDispatch };
