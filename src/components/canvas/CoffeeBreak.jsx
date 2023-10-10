import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const CoffeeBreak = ({ isMobile }) => {
  const coffeeBreak = useGLTF('./coffee_break/scene.gltf');
  coffeeBreak.scene.children[0].children[0].children[0].children[0].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[8].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[15].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[30].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[34].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[35].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[37].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[51].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[52].visible = false;
  coffeeBreak.scene.children[0].children[0].children[0].children[53].visible = false;
  console.log(isMobile);
  return (
    <mesh>
      <primitive
        object={coffeeBreak.scene}
        scale={isMobile ? 0.4 : 0.7}
        position={isMobile ? [0, -5, 0] : [0, -5, -4]}
        rotation={[0, 0.5, 0]}
      />
    </mesh>
  );
};

const CoffeeBreakCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      console.log(event.matches);
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [15, 5, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={Math.PI / 8}
          maxAzimuthAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Float
          speed={5}
          rotationIntensity={0.5}
          floatIntensity={0.2}
          floatingRange={[0.05, 0]}
        >
          <CoffeeBreak isMobile={isMobile} />
        </Float>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CoffeeBreakCanvas;
