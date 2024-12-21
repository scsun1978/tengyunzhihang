import { motion } from 'framer-motion';
import type { Solution } from '../types';
import { SolutionFeatureCard } from './SolutionFeatureCard';
import { CaseStudyCard } from './CaseStudyCard';

interface SolutionDetailProps {
  solution: Solution;
}

export function SolutionDetail({ solution }: SolutionDetailProps) {
  return (
    <section className="py-16" id={solution.id}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{solution.title}</h2>
            <p className="text-gray-600">{solution.description}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="space-y-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">核心功能</h3>
          {solution.features.map((feature, index) => (
            <SolutionFeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {solution.cases.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">成功案例</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {solution.cases.map((caseStudy, index) => (
                <CaseStudyCard
                  key={caseStudy.title}
                  caseStudy={caseStudy}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}