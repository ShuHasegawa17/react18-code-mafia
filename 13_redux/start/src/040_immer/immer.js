import { produce } from 'immer';

const state = {
  name: 'Tom',
  hobbies: ['tennis', 'soccer'],
};
const newState = produce(state, (draft) => {
  draft.name = 'John';
  // ネストした階層でもimmutableを返す。
  draft.hobbies[1] = 'baseball';
});

console.log(state, newState);
