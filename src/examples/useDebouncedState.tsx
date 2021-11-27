import React from 'react';
import useDebouncedState from '../utilities/hooks/useDebouncedState';

export default function useDebouncedStateExample() {
  const debounceTime = 1000;
  const [value, setValue] = useDebouncedState('', debounceTime);

  return (
    <div>
      <div>Enter a text</div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <h3>
        Value after debounce {debounceTime}ms: {value}
      </h3>
    </div>
  );
}
