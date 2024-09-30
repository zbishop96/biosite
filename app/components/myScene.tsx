import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useRef } from 'react';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene } = useGLTF('/casa.glb');
  const ref = useRef<THREE.Group>(null!);
  // Rotate the model on each frame
  useFrame(() => {
    ref.current.rotation.y += 0.0001;
  });

  return <primitive ref={ref} object={scene} scale={[1, 1, 1]} position={[0, 0, 0]} />;

};

const Scene = () => {
    return (
        <Canvas style={{ }}>
        <ambientLight intensity={.4} />
        <pointLight position={[-2, 1, 8]} intensity={15} />
        <pointLight position={[2, 4, 0]} intensity={10} />
        
        {/* Set the camera position */}
        <PerspectiveCamera makeDefault position={[0, 50, 50]} />
        
        <Model />
        <OrbitControls />
      </Canvas>
    );
  };
  
  export default Scene;
