import React from 'react';
import useIsClient from '../utilities/hooks/useIsClient';

export default function useIsClientExample() {
  const isClient = useIsClient();

  return <div>{isClient ? 'Client' : 'server'}</div>;
}
