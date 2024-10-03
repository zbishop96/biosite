import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
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

  return (
    <primitive 
      ref={ref} 
      object={scene} 
      scale={[1, 1, 1]} 
      position={[4, -2, -1]} 
    />
  );
};

const ClickableCanvas = () => {
  const { camera, scene } = useThree();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const handleClick = (event: ThreeEvent<PointerEvent>) => {
    // Convert mouse position to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      console.log('Clicked on:', clickedObject.name);
      // You can add more logic here based on the clicked object
    }
  };

  return (
    <mesh onPointerDown={handleClick}>
      <Model />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[-1, 3, -1]} intensity={40} decay={2.3} />
      <pointLight position={[-1, 1, -1]} intensity={10} decay={1.7} />
      <PerspectiveCamera makeDefault position={[0, 3, 9]} rotation={[Math.PI / -12, 0, 0]}/>
      
      <ClickableCanvas />
    </Canvas>
  );
};

export default Scene;
