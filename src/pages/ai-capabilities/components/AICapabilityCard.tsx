import { motion } from 'framer-motion';
import { Brain, CheckCircle, Zap } from 'lucide-react';
import type { AICapability } from '../types';

interface AICapabilityCardProps {
  capability: AICapability;
  index: number;
}

export function AICapabilityCard({ capability, index }: AICapabilityCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      id={capability.id}
    >
      <div className="relative h-64">
        <img
          src={capability.image}
          alt={capability.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl font-bold text-white mb-2">{capability.title}</h2>
          <p className="text-gray-200 max-w-2xl">{capability.description}</p>
        </div>
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {capability.features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    性能指标
                  </h4>
                  <ul className="space-y-2 pl-7">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-600 list-disc">{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-500" />
                    技术特点
                  </h4>
                  <ul className="space-y-2 pl-7">
                    {feature.technicalDetails.map((tech, i) => (
                      <li key={i} className="text-gray-600 list-disc">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {capability.applications.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">应用案例</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {capability.applications.map((app, idx) => (
                <div
                  key={app.title}
                  className="bg-blue-50 rounded-lg p-6"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h4>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}