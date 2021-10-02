import React, { Component } from 'react';
import AnimatedBg from 'react-animated-bg';
import { interpolateHslLong } from 'd3-interpolate';

import image from 'images/hex.png';

const imageHeight = 300;
const imageWidth = 350;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translate: {
        x: 0,
        y: 0
      },
      speed: {
        x: -Math.ceil(Math.random() * 3),
        y: -Math.ceil(Math.random() * 3)
      }
    };
    this.colors = [];

    for (let i = 0; i <= 1; i += 1 / 32.0) {
      this.colors.push(interpolateHslLong('red', 'blue')(i));
    }

    for (let i = 0; i <= 1; i += 1 / 32.0) {
      this.colors.push(interpolateHslLong('blue', 'red')(i));
    }

    this.updateFrame = this.updateFrame.bind(this);
    setTimeout(() => requestAnimationFrame(this.updateFrame), 100);
  }

  updateFrame() {
    const newState = {
      ...this.state
    };

    if (
      this.state.translate.x <= 0 ||
      this.state.translate.x + imageWidth >= window.innerWidth
    ) {
      newState.speed.x *= -1;
    }

    if (
      this.state.translate.y <= 0 ||
      this.state.translate.y + imageHeight >= window.innerHeight
    ) {
      newState.speed.y *= -1;
    }

    newState.translate = {
      x: this.state.translate.x + newState.speed.x,
      y: this.state.translate.y + newState.speed.y
    };

    this.setState(newState, () => requestAnimationFrame(this.updateFrame));
  }

  render() {
    const { x, y } = this.state.translate;

    return (
      <div className="sl-root">
        <AnimatedBg
          className="sl-background"
          colors={this.colors}
          duration={0.5}
          delay={0}
          timingFunction="ease-in"
          // randomMode
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
}

export default App;
