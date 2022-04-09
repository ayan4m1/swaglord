import { interpolateHsl, interpolateHslLong } from 'd3-interpolate';
import { useMemo } from 'react';

export const useColorRange = (start, end, long = false, slices = 32.0) =>
  useMemo(() => {
    const result = [];
    const interpolateFn = long ? interpolateHslLong : interpolateHsl;

    for (let i = 0; i <= 1; i += 1 / slices) {
      result.push(interpolateFn(start, end)(i));
    }

    for (let i = 0; i <= 1; i += 1 / slices) {
      result.push(interpolateFn(end, start)(i));
    }

    return result;
  }, [start, end, slices, long]);
