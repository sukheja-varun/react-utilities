import React, { useRef } from 'react';
import useOnClickOutside from '../utilities/hooks/useOnClickOutside';

const useOnClickOutsideExample = () => {
  const style = {
    background: 'red',
    color: 'white',
    width: '300px',
    height: '100px',
    margin: 10,
    'text-align': 'center',
  };
  const ref = useRef(null);
  const outsideClickHandler = (event: MouseEvent) => {
    alert('User clicked outside the Box-1');
  };

  useOnClickOutside(ref, outsideClickHandler);
  return (
    <div>
      <div ref={ref} style={style}>
        Box 1
        <br />
        (Click Outside this box)
      </div>
      <div style={{ ...style, background: 'blue' }}>Box2</div>
    </div>
  );
};

export default useOnClickOutsideExample;
