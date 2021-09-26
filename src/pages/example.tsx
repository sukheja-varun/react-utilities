import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router';

// import styles from'./example.module.scss';

const Example: React.FC = () => {
  const { exampleFile } = useParams<any>();
  console.log('===>', exampleFile);

  const [Component, setComponent] = useState<any>(null);

  function loadComponent(fileName: string) {
    const Component = React.lazy(() =>
      import(`./../examples/${fileName}.tsx`).catch(() => ({
        default: () => <div>Not found</div>,
      }))
    );
    return Component;
  }

  useEffect(() => {
    console.log('Example route changed:', exampleFile);

    setComponent(loadComponent(exampleFile));
  }, [exampleFile]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {console.log('abdhsd')}
        <h1>Example:{exampleFile}</h1>
        {Component && <Component />}
      </div>
    </Suspense>
  );
};
export default Example;
