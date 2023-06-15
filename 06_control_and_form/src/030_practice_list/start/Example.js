import Profile from './components/Profile';

const Example = () => {
  const profiles = [
    {
      key: Math.floor(Math.random() * 1000),
      name: 'Geo',
      age: 18,
      hobbies: ['sports', 'music'],
    },
    {
      key: Math.floor(Math.random() * 1000),
      name: 'TOM',
      age: 25,
      hobbies: ['moview', 'music'],
    },
    {
      key: Math.floor(Math.random() * 1000),
      name: 'Lisa',
      age: 21,
      hobbies: ['sport', 'travel', 'game'],
    },
  ];
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {profiles.map((p) => (
          <Profile key={p.key} {...p} />
        ))}
      </ul>
    </>
  );
};

export default Example;
