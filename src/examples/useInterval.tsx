import { ChangeEvent, useState } from 'react';
import useInterval from '../utilities/hooks/useInterval';

const useIntervalExample = () => {
  // The counter
  const [count, setCount] = useState<number>(0);
  // Dynamic delay
  const [delay, setDelay] = useState<number>(1000);
  // ON/OFF
  const [isPlaying, setPlaying] = useState<boolean>(false);

  const clearInterval = useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(event.target.value));
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <button onClick={clearInterval}>Clear Timer</button>
      <p>
        <label htmlFor="delay">Delay: </label>
        <input
          type="number"
          name="delay"
          onChange={handleChange}
          value={delay}
        />
      </p>
    </>
  );
};

export default useIntervalExample;
