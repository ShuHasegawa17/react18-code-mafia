import './Expression.css';

const Expression = () => {
  const title = 'Expression';
  const arry = ['item1', 'item2', 'item3'];
  const hello = (arg) => `${arg} Function`;
  // これはHTML ではなく、JSX
  const jsx = <h3>Hello Jsx2</h3>;
  // {} Js式の挿入
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello('hello')}</h3>
      <h3>{/* コメントの挿入　*/}</h3>
      {<h3>Hello Jsx</h3>}
      {jsx}
    </div>
  );
};

export default Expression;
