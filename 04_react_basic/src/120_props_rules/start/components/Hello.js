const Hello = (props) => {
  //  props.name = 'hase';
  const desc = Reflect.getOwnPropertyDescriptor(props, 'name');
  console.log(desc);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
