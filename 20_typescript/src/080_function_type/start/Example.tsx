const Example = () => {
  function sum1(x: number, y: number = 3) {
    return x + y;
  }

  const result = sum1(1);
  console.log(result);
  const sum2 = (x: number, y?: number): number => x + (y || 0);
  const result2 = sum2(1);

  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  console.log(sum3(5, 8));
};

export default Example;
