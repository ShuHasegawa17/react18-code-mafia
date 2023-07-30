const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  };

  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };

  const strArry = repeatStr('hello', 3);
  const numArry = repeatNum(10, 3);
  console.log(strArry);
  console.log(numArry);

  const arry = repeat('kon', 5);
  console.log(arry);
};

export default Example;
