import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useRef } from 'react';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene } = useGLTF('/halfpipeExtras.glb');

  const ref = useRef<THREE.Group>(null!);
  // Rotate the model on each frame
  useFrame(() => {
    ref.current.rotation.y += 0.0000;
  });

  return <primitive ref={ref} object={scene} scale={[1, 1, 1]} position={[4, -2, -1]} />;

};

const Scene = () => {
    return (
      <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
        <ambientLight intensity={.3} />
        <pointLight position={[-1, 3, -1]} intensity={40} decay={2.3} />
        <pointLight position={[-1, 1, -1]} intensity={10} decay={1.7} />
        <PerspectiveCamera makeDefault position={[0, 3, 9]} />
        
        <Model />
        <OrbitControls />
      </Canvas>
    );
  };
  
  export default Scene;
