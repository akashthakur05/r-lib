import { useEffect } from 'react';

/**
 * A hook that executes a function component is unmounted
 * @param func the function which will be invoked at unmount
 */
export  function useUnmount(func: () => void) {
  if (typeof func !== 'function')
    console.error('parameter func must be a function');

  useEffect(() => {
    return func;
  }, []);
}