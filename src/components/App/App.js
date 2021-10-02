import React, { useEffect, useMemo, useRef, useState } from 'react';
import AnimatedBg from 'react-animated-bg';
import { interpolateHslLong } from 'd3-interpolate';

import image from 'images/hex.png';

const imageHeight = 300;
const imageWidth = 350;

export default function App() {
  const animateRef = useRef();
  const [state, setState] = useState({
    translate: { x: 0, y: 0 },
    speed: {
      x: -Math.max(0.5, Math.ceil(Math.random() * 3)),
      y: -Math.max(0.5, Math.ceil(Math.random() * 3))
    }
  });
  const colors = useMemo(() => {
    const result = [];

    for (let i = 0; i <= 1; i += 1 / 32.0) {
      result.push(interpolateHslLong('red', 'blue')(i));
    }

    for (let i = 0; i <= 1; i += 1 / 32.0) {
      result.push(interpolateHslLong('blue', 'red')(i));
    }

    return result;
  }, []);
  const updateFrame = () => {
    setState((oldState) => {
      const newState = { ...oldState };

      if (
        oldState.translate.x <= 0 ||
        oldState.translate.x + imageWidth >= window.innerWidth
      ) {
        newState.speed.x *= -1;
      }

      if (
        oldState.translate.y <= 0 ||
        oldState.translate.y + imageHeight >= window.innerHeight
      ) {
        newState.speed.y *= -1;
      }

      newState.translate = {
        x: oldState.translate.x + newState.speed.x,
        y: oldState.translate.y + newState.speed.y
      };

      animateRef.current = requestAnimationFrame(updateFrame);

      return newState;
    });
  };

  useEffect(() => {
    animateRef.current = requestAnimationFrame(updateFrame);

    return () => cancelAnimationFrame(animateRef.current);
  }, []);

  const { x, y } = state.translate;

  return (
    <div className="sl-root">
      <AnimatedBg
        className="sl-background"
        colors={colors}
        duration={0.5}
        delay={0}
        timingFunction="ease-in"
      >
        <div
          className="sl-text"
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <img
            src={image}
            alt="hex's face"
            height={imageHeight}
            width={imageWidth}
          />
        </div>
      </AnimatedBg>
    </div>
  );
}
