import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { solutions } from '@/pages/solutions/data/solutions';

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">行业解决方案</h2>
          <p className="text-xl text-gray-600">专注航空领域，提供全方位智能化解决方案</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-48 relative">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{solution.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{solution.description}</p>
                <div className="space-y-2 mb-4">
                  {solution.features.slice(0, 2).map((feature) => (
                    <div key={feature.title} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/solutions#${solution.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  了解更多
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}