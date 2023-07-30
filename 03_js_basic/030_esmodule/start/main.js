import functionB, { hello, User } from './module.js';

hello();

const user = new User('tom');
user.hello();

functionB();
