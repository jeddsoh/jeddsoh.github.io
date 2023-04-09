import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./laptop/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <pointLight intensity={0} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 1.5 : 2.2}
        position={isMobile ? [0, -2.75, 0.25] : [0, -3.5, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Listen for screen size change
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set initial value for isMobile state
    setIsMobile(mediaQuery.matches);

    //Define callback function to handle changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); 
    }
  
    // Add callback as Listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove Listener when component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  
  }, [])

  return (
    <Canvas
      frameLoop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      >
      
      <Suspense fallback={<CanvasLoader />}>
      
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;