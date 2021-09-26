import React from 'react';
import useToggle from '../utilities/hooks/useToggle';

const useToggleExample: React.FC = () => {
  const [value, toggleValue] = useToggle(true);

  return (
    <div>
      <h1>useToggle - Hook Example</h1>
      <h3>
        <span>Value 👉🏻 </span>
        <span style={{ color: value ? 'green' : 'red' }}>
          {value.toString()}
        </span>
      </h3>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Toggle With True</button>
      <button onClick={() => toggleValue(false)}>Toggle With False</button>
    </div>
  );
};
export default useToggleExample;
