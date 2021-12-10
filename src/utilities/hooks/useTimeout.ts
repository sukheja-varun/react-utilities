import React, { useEffect } from 'react';

export default function useTimeout(callback: () => void, delay: number) {
  const timeoutRef = React.useRef<number | null>(null);
  const savedCallback = React.useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // useLayoutEffect(() => {
  //   savedCallback.current = callback;
  // }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(
        () => savedCallback.current(),
        delay
      );
      //   cleanup function
      return clearTimeout;
    }
  }, [delay]);

  /**
   * It clears out the setTimeout
   */
  const clearTimeout = () => {
    timeoutRef.current && window.clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  return clearTimeout;
}
