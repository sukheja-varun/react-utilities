import { useEffect } from 'react';

export default function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: any[]
) {
  useEffect(() => {
    const timerId = setTimeout(callback, delay);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [...dependencies, callback, delay]);
}
