import { useCallback, useEffect, useState } from 'react';

export type AnimationStatusState =
  | 'ENTERING'
  | 'ENTERED'
  | 'EXITING'
  | 'EXITED'
  | null;

export const useAnimationKeyframes = (
  element: HTMLDivElement | null,
  isEntered?: boolean,
): [AnimationStatusState, () => void, () => void] => {
  const [animationStatus, setAnimationStatus] = useState<AnimationStatusState>(
    // eslint-disable-next-line no-nested-ternary
    isEntered === undefined ? null : (isEntered ? 'ENTERED' : 'EXITED'),
  );
  const onAnimationEnd = useCallback(() => {
    setAnimationStatus((prevState) => {
      if (prevState === 'ENTERING') {
        return 'ENTERED';
      } if (prevState === 'EXITING') {
        return 'EXITED';
      }
      return prevState;
    });
  }, []);

  useEffect(() => {
    element?.addEventListener('animationend', onAnimationEnd);
    return () => {
      element?.removeEventListener('animationend', onAnimationEnd);
    };
  }, [element]);

  const enter = useCallback(() => {
    setAnimationStatus((prevState) => {
      if (prevState !== 'EXITING') {
        return 'ENTERING';
      }
      return prevState;
    });
  }, []);

  const exit = useCallback(() => {
    setAnimationStatus((prevState: AnimationStatusState) => {
      if (prevState !== 'ENTERING') {
        return 'EXITING';
      }
      return prevState;
    });
  }, []);

  return [animationStatus, enter, exit];
};
