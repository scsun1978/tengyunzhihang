import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-600 text-white text-sm rounded">
              {product.version}
            </span>
            {product.type === 'core' && (
              <span className="px-2 py-1 bg-green-600 text-white text-sm rounded">
                核心产品
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{product.description}</p>

        <div className="space-y-6">
          {product.features.map((feature) => (
            <div key={feature.title}>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">产品优势</h5>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">技术特点</h5>
                  <ul className="space-y-1">
                    {feature.technicalDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {product.certifications.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="font-medium">认证资质：</span>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}