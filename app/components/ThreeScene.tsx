import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const ref = useRef<THREE.Mesh>(null!);

  // Rotate the cube on each frame
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" roughness={0.5} metalness={0.5} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={50} />
      <pointLight position={[-10, -10, -10]} intensity={35} />
      <Cube />
    </Canvas>
  );
};

export default Scene;
