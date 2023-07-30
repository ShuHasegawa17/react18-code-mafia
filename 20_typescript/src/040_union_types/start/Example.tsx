const Example = () => {
  // 練習用
  let strOrNum: string | number = 1;
  strOrNum = 'Hello';
  // strOrNum = false
  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';
};

export default Example;
