import { DependencyList, useEffect, useRef } from 'react';

const useOnUpdate = (effect: React.EffectCallback, deps: DependencyList) => {
  const isMounted = useRef(false);

  useEffect(() => {
    console.log('useEffect called');

    // check to see if this is the 1st run
    if (!isMounted.current) {
      // if this is the 1st run then setting the mounted to true
      isMounted.current = true;
    } else {
      // executing the effect after the 1st run
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useOnUpdate;
