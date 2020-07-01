import React, { Component } from 'react';
import AnimatedBg from 'react-animated-bg';
import { interpolateHslLong } from 'd3-interpolate';

export class App extends Component {
  constructor(props) {
    super(props);

    this.colors = [];

    for (let i = 0; i <= 1; i += 1 / 32.0) {
      this.colors.push(interpolateHslLong('red', 'blue')(i));
    }

    for (let i = 0; i <= 1; i += 1 / 32.0) {
      this.colors.push(interpolateHslLong('blue', 'red')(i));
    }
  }

  render() {
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
          <h1 className="sl-text">S W A G L O R D</h1>
        </AnimatedBg>
      </div>
    );
  }
}

export default App;
