import axios from 'axios';
const ENDPOINT_URL = 'http://localhost:3003/todo';

const todoApi = {
  async getAll() {
    const res = await axios.get(ENDPOINT_URL);
    return res.data;
  },

  async post(todo) {
    const res = await axios.post(ENDPOINT_URL, todo);
    return res.data;
  },

  async delete(todo) {
    const res = await axios.delete(ENDPOINT_URL + `/${todo.id}`);
    return res.data;
  },

  async patch(todo) {
    const res = await axios.patch(ENDPOINT_URL + `/${todo.id}`, todo);
    return res.data;
  },
};

export default todoApi;
