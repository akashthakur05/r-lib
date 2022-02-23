import { useEffect } from 'react';

/**
 * A hook that executes a function when, and only when, the component is mounted
 * @param func the function which will be invoked at mount
 */
export function useMount(func: () => void) {
  if (typeof func !== 'function')
    console.error('parameter func must be a function');

  useEffect(func, []);
}
