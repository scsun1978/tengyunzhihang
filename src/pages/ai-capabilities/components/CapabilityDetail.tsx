import { motion } from 'framer-motion';
import type { AICapability } from '../types';

interface CapabilityDetailProps {
  capability: AICapability;
}

export function CapabilityDetail({ capability }: CapabilityDetailProps) {
  return (
    <section className="py-16" id={capability.id}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{capability.title}</h2>
            <p className="text-gray-600">{capability.description}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src={capability.image}
              alt={capability.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {capability.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">核心技术</h4>
                <div className="flex flex-wrap gap-2">
                  {feature.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">应用场景</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {capability.applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{application.title}</h4>
                <p className="text-gray-600 mb-6">{application.description}</p>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">主要优势</h5>
                  <ul className="space-y-2">
                    {application.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}