import { useEffect, useState } from 'react';

//export default function SSR({ message }) {
export default function SSR() {
  console.log('hello');
  //console.log(message);

  // エラーとなる。クライアントサイドの処理はuseEffectに記載
  //window.localStorage.setItem('kye', 'value');
  const [state, setState] = useState('bye');
  useEffect(() => {
    console.log('use effect');
    window.localStorage.setItem('kye', 'value');
    document.cookie = 'val=0; path=/';
  }, []);
  const val = 0;
  return (
    <>
      <h3>
        {val}:{state}
      </h3>
    </>
  );
}

// node.js上でのみ実行される
// export async function getServerSideProps(context) {
//   const { cookie } = context.req.headers;
//   console.log(cookie);
//   console.log('getserverside props execute');
//   return {
//     // redirect: {
//     //   destination: '/',
//     // },
//     props: { message: 'From Sever Side Props' },
//   };
// }
