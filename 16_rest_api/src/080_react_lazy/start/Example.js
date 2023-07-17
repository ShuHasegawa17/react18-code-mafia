import { useState, lazy, Suspense, startTransition } from 'react';
import ComponentA from './components/ComponentA';

const LazyCompoentA = lazy(() => import('./components/ComponentA'));
const LazyCompoentB = lazy(() => import('./components/ComponentB'));
const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setCompA((prev) => !prev);
          });
        }}
      >
        ComponentA
      </button>
      <Suspense fallback={<div>loading</div>}>
        {compA && <LazyCompoentA />}
        {!compA && <LazyCompoentB />}
      </Suspense>
    </>
  );
};

export default Example;
