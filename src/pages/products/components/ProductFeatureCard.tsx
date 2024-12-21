import { motion } from 'framer-motion';
import type { ProductFeature } from '../types';

interface ProductFeatureCardProps {
  feature: ProductFeature;
  index: number;
}

export function ProductFeatureCard({ feature, index }: ProductFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
      <p className="text-gray-600 mb-4">{feature.description}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">产品优势</h4>
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
          <h4 className="font-semibold text-gray-900 mb-2">技术特点</h4>
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