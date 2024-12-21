import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToSection } from '@/lib/utils';

export function HeroContent() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            腾云智航
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            引领智慧机场，驱动未来交通
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          <button
            onClick={() => scrollToSection('solutions')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105"
          >
            了解更多
          </button>
          <button 
            onClick={handleContactClick}
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full transition-all transform hover:scale-105"
          >
            联系我们
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          onClick={() => scrollToSection('solutions')}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </div>
    </div>
  );
}