import Hello, { Btn } from './Hello';

const Example: React.FC = () => {
  return (
    <>
      <Btn fn={(text) => console.log(`Hello ${text}`)} />
      <Hello text="OOI">children</Hello>
    </>
  );
};

export default Example;
