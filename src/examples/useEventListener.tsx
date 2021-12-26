import { useCallback, useRef, useState } from 'react';
import useEventListener from '../utilities/hooks/useEventListener';

const useEventListenerExample = () => {
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [date, setDate] = useState<string>();
  //   Ref for button
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const onMouseMove = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  const onClick = useCallback(
    (event: Event) => {
      setDate(new Date().toLocaleString());
    },
    [setDate]
  );

  // Add event listener using our hook
  useEventListener('mousemove', onMouseMove);
  useEventListener('click', onClick, buttonRef);

  return (
    <>
      <h2>
        The mouse position is ({coords.x}, {coords.y})
      </h2>
      <button ref={buttonRef}>click me</button>
      <h2>{date ? `Clicked at ${date}` : `You have not clicked Yet!`}</h2>
    </>
  );
};

export default useEventListenerExample;
