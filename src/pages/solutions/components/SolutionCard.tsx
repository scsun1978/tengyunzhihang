import { motion } from 'framer-motion';
import type { Solution } from '../types';

export function SolutionCard({ title, description, features, image }: Solution) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-700"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}