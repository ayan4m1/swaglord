import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Vignette
  // eslint-disable-next-line import/no-unresolved
} from '@react-three/postprocessing';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

// const clamp = (val, min, max) => Math.min(min, Math.max(max, val));
const lerp = (x, y, alpha) => x * (1 - alpha) + y * alpha;

function PointLight(props) {
  const lightRef = useRef();

  useFrame((scene) => {
    const newPos = lerp(
      -20,
      0,
      Math.abs(Math.cos((scene.clock.getElapsedTime() - 0.5) / 2))
    );
    lightRef.current.position.x = newPos;
  });

  return (
    <light {...props} ref={lightRef}>
      <pointLight castShadow intensity={0.2} position={[10, 10, 10]} />
    </light>
  );
}

function Text(props) {
  const geom = useLoader(STLLoader, './test.stl');

  return (
    <mesh {...props}>
      <primitive object={geom} attach="geometry" />
      <meshPhysicalMaterial
        color={'#2849b5'}
        sheenColor={'#7889bf'}
        sheen={5}
      />
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
  return (
    <Canvas shadows>
      <ambientLight />
      <PointLight />
      <Text position={[0, 2, 0]} scale={0.1} castShadow />
      <Box position={[-3, 0, 0]} delayTime={0} castShadow />
      <Box position={[0, 0, 0]} delayTime={1} castShadow />
      <Box position={[3, 0, 0]} delayTime={2} castShadow />
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={'#262323'} />
      </mesh>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}
