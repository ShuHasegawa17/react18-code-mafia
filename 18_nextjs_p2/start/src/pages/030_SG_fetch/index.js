import axios from 'axios';
import Head from 'next/head';
import ArticleList from '../../components/articleList';
export default function Page({ articles }) {
  if (!articles) {
    return <div>データなし</div>;
  }
  return (
    <>
      <Head>
        <title>ページ一覧</title>
      </Head>
      <h3>フェッチ&SG</h3>
      <ArticleList list={articles} />
    </>
  );
}

export async function getStaticProps() {
  const ENDPOINT = 'http://localhost:4030/articles';
  const result = await axios.get(ENDPOINT).then((res) => res.data);
  return { props: { articles: result } };
}
