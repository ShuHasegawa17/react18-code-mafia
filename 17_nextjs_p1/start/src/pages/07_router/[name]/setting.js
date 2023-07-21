import { useRouter } from 'next/router';

export default function Setting({ query }) {
  // 1.ルート情報から取得する
  const router = useRouter();
  console.log(router.query);

  const clickHandler = () => {
    //router.push('/', '/dummy-url');
    //router.replace('/', '/dummy-url');
    router.reload();
  };
  return (
    <>
      <h1>routerから取得：{router.query.name}</h1>
      <h1>ssr経由で取得：{query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  );
}

// 2.SSRを用いてprops経由で画面に渡す
export async function getServerSideProps(context) {
  const { query } = context;
  return {
    props: { query },
  };
}
