import { useRouter } from 'next/router';
export default function Page({ id, date }) {
  const router = useRouter();
  // ページ作成中か判定
  if (router.isFallback) {
    return <h3>isLoading...</h3>;
  }
  return (
    <h3>
      このページは{id}です, {date}
    </h3>
  );
}

export async function getStaticPaths() {
  console.log('getStaticpaths!!!');
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: 'blocking', // 存在しない場合、nodejsがページを作成する
  };
}

export async function getStaticProps({ params }) {
  console.log('getStaticprops!!!');
  const date = new Date();
  return {
    props: {
      id: params.id,
      date: date.toJSON(), //Date型は文字列に変換して受け渡す
    },
    revalidate: 5,
  };
}
