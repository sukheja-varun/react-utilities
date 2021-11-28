import React, { useEffect, useState } from 'react';
import useOnUpdate from '../utilities/hooks/useOnUpdate';

function useOnUpdateExample() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert('useEffect called');
  }, [count]);

  useOnUpdate(() => {
    alert('useOnUpdate called');
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment count</button> 👉🏻 {count}
      <br />
      <br />
      <strong>NOTE:</strong> Check alerts, you would see useOnUpdate is
      <strong> not called</strong> on mount unlike useEffect hook but is called
      only when it's dependency changes.
    </div>
  );
}

export default useOnUpdateExample;
