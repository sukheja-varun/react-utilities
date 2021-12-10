import { useState } from 'react';
import useTimeout from '../utilities/hooks/useTimeout';

const useTimeoutExample = () => {
  const [hasTimeElapsed, setHasTimeElapsed] = useState(false);
  const clearTimeout = useTimeout(() => {
    setHasTimeElapsed(true);
  }, 5000);
  return (
    <div>
      <p>
        {hasTimeElapsed ? '5 seconds has passed!' : 'The timer is running…'}
      </p>
      <span>click here to cancel timer:</span>{' '}
      <button onClick={clearTimeout}>Clear Timer</button>
    </div>
  );
};

export default useTimeoutExample;
