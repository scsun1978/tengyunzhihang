import { motion } from 'framer-motion';
import type { Product } from '../types';
import { ProductFeatureCard } from './ProductFeatureCard';

interface ProductSectionProps {
  product: Product;
}

export function ProductSection({ product }: ProductSectionProps) {
  return (
    <section className="py-16" id={product.id}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert) => (
                <span 
                  key={cert}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="space-y-8">
          {product.features.map((feature, index) => (
            <ProductFeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}