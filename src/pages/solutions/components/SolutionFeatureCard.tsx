import { motion } from 'framer-motion';
import type { SolutionFeature } from '../types';

interface SolutionFeatureCardProps {
  feature: SolutionFeature;
  index: number;
}

export function SolutionFeatureCard({ feature, index }: SolutionFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
      <p className="text-gray-600 mb-6">{feature.description}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-semibold text-gray-900 mb-3">产品优势</h5>
          <ul className="space-y-2">
            {feature.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-semibold text-gray-900 mb-3">技术特点</h5>
          <ul className="space-y-2">
            {feature.technicalDetails.map((detail, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}