const Example = () => {
  // 練習用
  let str: string = 'Hello';
  console.log(str);

  let bignum: bigint = 103n;
  console.log(bignum);

  // リテラル型
  let trueVal: true = true;
  let hello: 'Hello' = 'Hello';
  let num123: 1 | 2 | 3 = 3;
};

export default Example;
