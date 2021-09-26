import React from 'react';
import useDebouncedState from '../utilities/hooks/useDebouncedState';

export default function useDebouncedStateExample() {
  const [value, setValue] = useDebouncedState('', 1000);

  return (
    <div>
      <div>Enter a text</div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <h3>Value: {value}</h3>
    </div>
  );
}
