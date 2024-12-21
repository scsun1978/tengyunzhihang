import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  caseStudy: {
    title: string;
    description: string;
    results: string[];
  };
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h4 className="text-xl font-bold text-gray-900 mb-4">{caseStudy.title}</h4>
      <p className="text-gray-600 mb-6">{caseStudy.description}</p>
      
      <div>
        <h5 className="font-semibold text-gray-900 mb-3">项目成果</h5>
        <ul className="space-y-2">
          {caseStudy.results.map((result, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}