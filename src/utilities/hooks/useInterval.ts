import React, { useEffect } from 'react';

export default function useInterval(
  callback: () => void,
  delay: number | null,
  startImmediately: boolean
) {
  const intervalRef = React.useRef<number | null>(null);
  const savedCallback = React.useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // useLayoutEffect(() => {
  //   savedCallback.current = callback;
  // }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      startImmediately && savedCallback.current(); // to immediately start callback execution
      intervalRef.current = window.setInterval(
        () => savedCallback.current(),
        delay
      );
      //   cleanup function
      return clearInterval;
    }
  }, [delay]);

  /**
   * It clears out the setInterval
   */
  const clearInterval = () => {
    intervalRef.current && window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return clearInterval;
}
