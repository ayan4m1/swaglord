import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// const clamp = (val, min, max) => Math.min(min, Math.max(max, val));
const lerp = (x, y, alpha) => x * (1 - alpha) + y * alpha;

function Box(props) {
  const meshRef = useRef();
  useFrame((scene) => {
    if (scene.clock.elapsedTime >= props.delayTime) {
      // meshRef.current.rotation.y += delta;
      meshRef.current.scale.x = lerp(
        1,
        1.5,
        Math.abs(Math.sin(scene.clock.getElapsedTime() - props.delayTime))
      );
      meshRef.current.scale.y = lerp(
        1,
        1.5,
        Math.abs(Math.sin(scene.clock.getElapsedTime() - props.delayTime))
      );
      meshRef.current.scale.z = lerp(
        1,
        1.5,
        Math.abs(Math.sin(scene.clock.getElapsedTime() - props.delayTime))
      );
    }
  });

  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#3366dd'} />
    </mesh>
  );
}

Box.propTypes = {
  delayTime: PropTypes.number.isRequired
};

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 20, 10]} />
      <Box position={[-3, 0, 0]} delayTime={0} />
      <Box position={[0, 0, 0]} delayTime={1} />
      <Box position={[3, 0, 0]} delayTime={2} />
      <mesh>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={'#262323'} />
      </mesh>
    </Canvas>
  );
}
