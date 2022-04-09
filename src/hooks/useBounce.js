import { useCallback, useEffect, useState, useRef } from 'react';

export const useBounce = ({ width, height } = { width: 0, height: 0 }) => {
  const animateRef = useRef();
  const [state, setState] = useState({
    translate: { x: 0, y: 0 },
    speed: {
      x: -Math.max(0.5, Math.ceil(Math.random() * 3)),
      y: -Math.max(0.5, Math.ceil(Math.random() * 3))
    }
  });
  const updateFrame = useCallback(
    () =>
      setState((oldState) => {
        const newSpeed = { ...oldState.speed };
        const { translate } = oldState;

        if (translate.x <= 0 || translate.x + width >= window.innerWidth) {
          newSpeed.x *= -1;
        }

        if (translate.y <= 0 || translate.y + height >= window.innerHeight) {
          newSpeed.y *= -1;
        }

        const newTranslate = {
          x: translate.x + newSpeed.x,
          y: translate.y + newSpeed.y
        };

        animateRef.current = requestAnimationFrame(updateFrame);

        return {
          translate: newTranslate,
          speed: newSpeed
        };
      }),
    [height, width]
  );

  useEffect(() => {
    animateRef.current = requestAnimationFrame(updateFrame);

    return () => cancelAnimationFrame(animateRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
