import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>HELLO NEXTJS</div>
      <Link
        href={{ pathname: '/07_router', query: { key: 'aaaa' } }}
        as="/dummy"
      >
        <a>/07_router</a>
      </Link>
      <br />
      <a href="/07_router">/07_router:画面の更新が発生する</a>
    </>
  );
}
