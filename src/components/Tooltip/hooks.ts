import {
  RefObject, useState, useLayoutEffect, ReactNode,
} from 'react';

export const useIsOverflow = (ref: RefObject<HTMLDivElement>, children: ReactNode) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  useLayoutEffect(() => {
    const { current } = ref;

    const checkOverflow = () => {
      if (current) {
        const hasOverflow = (current?.scrollHeight > current?.clientHeight)
          || (current?.scrollWidth > current?.clientWidth);

        setIsOverflow(hasOverflow);
      }
    };
    window.addEventListener('resize', checkOverflow);
    checkOverflow();

    return () => window.removeEventListener('resize', checkOverflow);
  }, [ref, children]);

  return isOverflow;
};
