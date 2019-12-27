import { DependencyList, EffectCallback } from 'react';
import isEqual from 'react-fast-compare';
import useCustomCompareEffect from './useCustomCompareEffect';

const isPrimitive = (val: any) => val !== Object(val);

const useDeepCompareEffect = (effect: EffectCallback, deps: DependencyList) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!deps || !deps.length) {
      console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }

    if (deps.every(isPrimitive)) {
      console.warn(
        '`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      );
    }
  }

  useCustomCompareEffect(effect, deps, isEqual);
};

export default useDeepCompareEffect;
