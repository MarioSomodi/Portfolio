import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const CoffeeBreak = () => {
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
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={coffeeBreak.scene}
        scale={0.8}
        position={[0, -5, -5]}
        rotation={[0, 0.5, 0]}
      />
    </mesh>
  );
};

const CoffeeBreakCanvas = () => {
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
          speed={3}
          rotationIntensity={1.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0.1, 0]}
        >
          <CoffeeBreak />
        </Float>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CoffeeBreakCanvas;
