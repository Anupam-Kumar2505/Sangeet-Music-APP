import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stage,
  Preload,
  useGLTF,
  SoftShadows,
  Loader,
} from "@react-three/drei";
import { CanvasLoader } from "./Loader";

const Headphones = () => {
  const headphones = useGLTF("./Headphones/scene.gltf");

  const myMesh = useRef();
  const speed = 1; // Speed of movement
  const amplitude = 0.25; // Maximum y-axis displacement

  useEffect(() => {
    headphones.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [headphones.scene]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    myMesh.current.position.y = amplitude * (Math.sin(elapsedTime * speed) + 1);
    myMesh.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={myMesh} rotation={[0, 0, -0.1]} castShadow>
      {/* <meshNormalMaterial />
      <boxGeometry castShadow /> */}
      <directionalLight position={[6, 3, -5]} intensity={1} />
      <directionalLight position={[-5, -0.6, -0.4]} intensity={0.5} />
      <directionalLight position={[-3.5, 9, -5]} intensity={5} />
      <directionalLight position={[0, -3.3, 9.4]} intensity={1} />
      <primitive
        object={headphones.scene}
        scale={[0.8, 0.8, 0.8]}
        rotate={[60, 60, 60]}
      />
    </mesh>
  );
};

const HeadphonesCanvas = () => {
  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <SoftShadows size={10} focus={10} samples={12} />

        <fog attach="fog" args={["black", 0, 40]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize={1024}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, -10, 10, 0.1, 50]}
          />
        </directionalLight>
        <pointLight
          position={[-10, 0, -20]}
          color="white"
          intensity={1}
          castShadow
        />
        <pointLight position={[0, -10, 0]} intensity={1} castShadow />
        <group position={[0, -0.7, 0]}>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.7, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.5} />
          </mesh>
          <Headphones />
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeadphonesCanvas;
