export default function IndexPage({ message }) {
  return <h3>SG: {message}</h3>;
}

// ビルド時に実行される関数
export async function getStaticProps() {
  //console.log('getStaticProps');
  return {
    props: { message: 'From static Props' },
  };
}
