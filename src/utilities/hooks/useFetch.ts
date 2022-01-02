// ref: https://kentcdodds.com/blog/stop-using-isloading-booleans
// https://usehooks-ts.com/react-hook/use-fetch

import { useEffect, useState } from 'react';

interface State<T> {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: T | null;
  error: Error | null;
}

function useFetch<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<State<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setState({ status: 'pending', data: null, error: null });
        const response = await fetch(url, {
          signal: controller.signal,
          ...options,
        });

        // if response is an HTTP error like 4XX 5XX
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        // if response is 2XX
        const data = (await response.json()) as T;
        setState({ status: 'resolved', data, error: null });
      } catch (error) {
        setState({ status: 'rejected', data: null, error: error as Error });
      }
    };
    fetchData();
    return () => {
      controller.abort(); // abort!
    };
  }, [url, options]);

  return {
    isLoading: state.status === 'idle' || state.status === 'pending',
    isResolved: state.status === 'resolved',
    isRejected: state.status === 'rejected',
    ...state,
  };
}

export default useFetch;
