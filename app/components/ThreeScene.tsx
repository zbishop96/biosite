import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';
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
  const { camera } = useThree();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const [targetPosition, setTargetPosition] = useState<THREE.Vector3 | null>(null);
  const [lookAtTarget, setLookAtTarget] = useState<THREE.Vector3 | null>(null);

  const handleClick = (event: ThreeEvent<PointerEvent>) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(camera.parent!.children, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      console.log('Clicked on:', clickedObject.name);
      
      if (clickedObject.name === 'Material2001'  || clickedObject.name === 'Material2004' || clickedObject.name === 'Material2') {
        setLookAtTarget(new THREE.Vector3(-0.1, -0.1, 0.00))
        setTargetPosition(new THREE.Vector3(4, 1, -2));
        // setLookAtTarget(new THREE.Vector3(0, 0, 0));
      } else if (clickedObject.name === 'defaultMaterial003'  || clickedObject.name === 'defaultMaterial001') {
        setLookAtTarget(new THREE.Vector3(0.00, 0.6, 0.00))
        setTargetPosition(new THREE.Vector3(-3.3, .55, -1.6));
        // setLookAtTarget(new THREE.Vector3(0, 0, 0));
      } else {
        setLookAtTarget(new THREE.Vector3(-0.15, 0.00, 0.00))
        setTargetPosition(new THREE.Vector3(0, 3, 9));
        // setLookAtTarget(new THREE.Vector3(0, 0, 0));
      }
      

    }
  };

  useFrame(() => {
    if (targetPosition) {
      camera.position.lerp(targetPosition, 0.015) 
      if (camera.position.distanceTo(targetPosition) < 0.05) {
        setTargetPosition(null); // Reset targetPosition
      }
    }
    
    if (lookAtTarget) {
      const targetQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler().setFromVector3(lookAtTarget));
      camera.quaternion.slerp(targetQuaternion, 0.015);
    }
  });

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
      <PerspectiveCamera makeDefault position={[0, 3, 9]} rotation={[Math.PI / -12, 0, 0]} />
      
      <ClickableCanvas />
    </Canvas>
  );
};

export default Scene;
