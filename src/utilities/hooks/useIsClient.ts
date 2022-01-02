// ref: https://usehooks-ts.com/react-hook/use-is-client
import { useEffect, useState } from 'react';

function useIsClient() {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
}

export default useIsClient;
