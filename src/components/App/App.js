import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  EffectComposer,
  Bloom,
  Vignette
  // eslint-disable-next-line import/no-unresolved
} from '@react-three/postprocessing';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// eslint-disable-next-line import/no-unresolved
import { Color, NearestFilter, TextureLoader } from 'three';

import { interpolateHslLong } from 'd3-interpolate';

// const clamp = (val, min, max) => Math.min(min, Math.max(max, val));
const lerp = (x, y, alpha) => x * (1 - alpha) + y * alpha;

const startColor = '#0000ff';
const endColor = '#ff0000';
const colorInterpolator = interpolateHslLong(startColor, endColor);

function PointLight(props) {
  const lightRef = useRef();

  useFrame((scene) => {
    lightRef.current.position.x = lerp(
      -20,
      0,
      Math.abs(Math.cos((scene.clock.getElapsedTime() - 0.5) / 2))
    );
  });

  return (
    <light {...props} ref={lightRef}>
      <pointLight castShadow intensity={0.6} position={[0, 10, 10]} />
    </light>
  );
}

function Text(props) {
  const meshRef = useRef(null);
  const geom = useLoader(STLLoader, './test.stl');

  useFrame((scene) => {
    const time = scene.clock.getElapsedTime() % 10;
    const color =
      time >= 5
        ? colorInterpolator((time - 5) / 5)
        : colorInterpolator(10 - time / 5);
    meshRef.current.material.color = new Color(color);
  });

  return (
    <mesh {...props} ref={meshRef}>
      <primitive object={geom} attach="geometry" />
      <meshPhysicalMaterial color={'#2849b5'} />
    </mesh>
  );
}

function Box(props) {
  const meshRef = useRef();
  useFrame((scene) => {
    if (scene.clock.elapsedTime >= props.delayTime) {
      const newScale = lerp(
        1,
        1.5,
        Math.abs(Math.sin(scene.clock.getElapsedTime() - props.delayTime))
      );

      meshRef.current.scale.x =
        meshRef.current.scale.y =
        meshRef.current.scale.z =
          newScale;
    }

    meshRef.current.material.emissiveIntensity = lerp(
      0,
      4,
      Math.abs(Math.cos(scene.clock.getElapsedTime() / 4))
    );
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        emissive={'#0055aa'}
        color={'#3366dd'}
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  );
}

Box.propTypes = {
  delayTime: PropTypes.number.isRequired
};

export default function App() {
  const tex = useLoader(TextureLoader, './fiveTone.jpg');

  tex.minFilter = NearestFilter;
  tex.magFilter = NearestFilter;

  return (
    <Canvas shadows>
      <ambientLight />
      <PointLight />
      <Text position={[0, 2, 0]} scale={0.1} castShadow />
      <Box position={[-3, -1, 0]} delayTime={0} castShadow />
      <Box position={[0, -1, 0]} delayTime={1} castShadow />
      <Box position={[3, -1, 0]} delayTime={2} castShadow />
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshToonMaterial gradientMap={tex} color={'#262323'} />
      </mesh>
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.25}
          luminanceSmoothing={0.9}
          intensity={3}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}
