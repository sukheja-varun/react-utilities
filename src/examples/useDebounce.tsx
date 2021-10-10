import React, { useState } from 'react';
import useDebounce from '../utilities/hooks/useDebounce';

export default function useDebouncedStateExample() {
  const [value, setValue] = useState('');
  useDebounce(debounceCallback, 1000, [value]);

  function debounceCallback() {
    alert('debounce hit');
  }

  return (
    <div>
      <div>Enter a text</div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <h3>Value: {value}</h3>
    </div>
  );
}
