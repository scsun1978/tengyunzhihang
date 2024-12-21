import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export function Scene3D() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [springs, api] = useSpring(() => ({
    scale: 1,
    rotation: [0, 0, 0],
    config: { mass: 2, tension: 200, friction: 50 }
  }));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      api.start({
        rotation: [y / 2, x / 2, 0],
        scale: 1 + Math.abs(x * y) * 0.1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [api]);

  useFrame((state) => {
    if (!sphereRef.current) return;
    // 添加缓慢自转效果
    sphereRef.current.rotation.y += 0.001;
  });

  return (
    <animated.mesh
      ref={sphereRef}
      scale={springs.scale}
      rotation={springs.rotation as any}
    >
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#0066cc"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </animated.mesh>
  );
}