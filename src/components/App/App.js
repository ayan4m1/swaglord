import AnimatedBg from '@bulletlogic/react-animated-bg';
import Wave from 'react-wavify';

import image from 'images/hex.png';
import { useBounce } from 'hooks/useBounce';
import { useColorRange } from 'hooks/useColorRange';

const imageHeight = 300;
const imageWidth = 350;

export default function App() {
  const { translate } = useBounce({
    width: imageWidth,
    height: imageHeight
  });
  const colors = useColorRange('#B38184', '#F0B49E');

  const { x, y } = translate;

  return (
    <div className="sl-root">
      <AnimatedBg
        className="sl-background"
        colors={colors}
        duration={0.1}
        delay={0}
        timingFunction="ease-in"
        style={{ overflow: 'hidden' }}
      >
        <div className="sl-curves">
          <Wave
            fill="url(#gradient)"
            height={window.innerHeight / 2}
            points={5}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor={colors[31]} />
                <stop offset="90%" stopColor={colors[0]} />
              </linearGradient>
            </defs>
          </Wave>
        </div>
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
