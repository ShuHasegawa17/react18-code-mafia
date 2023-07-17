import { useEffect, useState } from 'react';
import axios from 'axios';

const Example = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user');
      setUsers(res.data);
    };
    getUser();
  }, []);

  return (
    <div>
      {users?.map((u) => {
        return (
          <div key={u.id}>
            <h3>{u.username}</h3>
            <p>age:{u.age}</p>
            <p>hobby: {u.hobbies.join(',')}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
