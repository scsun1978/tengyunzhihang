import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial color="#0066cc" wireframe />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          <AnimatedSphere />
        </Canvas>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full bg-gradient-to-b from-transparent to-black/50">
        <div className="text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">腾云智航</h1>
            <p className="text-xl md:text-2xl mb-8">引领智慧机场，驱动未来交通</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <a 
              href="#solutions" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all"
            >
              了解更多
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-full transition-all"
            >
              联系我们
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}