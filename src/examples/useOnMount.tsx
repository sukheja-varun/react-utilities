import React, { useEffect, useState } from 'react';
import useOnMount from '../utilities/hooks/useOnMount';

function useOnMountExample() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert('useEffect called');
  }, [count]);

  useOnMount(() => {
    alert('useOnMount called');
  });

  return (
    <div>
      <button onClick={increment}>Increment count</button> 👉🏻 {count}
      <br />
      <br />
      <strong>NOTE:</strong> Check alerts, you would see useOnMount alert is
      called only once when the component is mounted.
    </div>
  );
}

export default useOnMountExample;
