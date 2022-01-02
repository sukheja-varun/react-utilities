import React from 'react';
import useSsr from '../utilities/hooks/useSsr';

export default function useSsrExample() {
  const { isBrowser } = useSsr();

  return <p>{isBrowser ? 'Browser' : 'Server'}!</p>;
}
