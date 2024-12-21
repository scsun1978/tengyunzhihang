import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import { Scene3D } from './Scene3D';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene3D />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Preload all />
        </Suspense>
      </Canvas>
      {/* 渐变背景叠加 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black/50" />
    </div>
  );
}