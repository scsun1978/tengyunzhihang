import { motion } from 'framer-motion';
import { Brain, Database, Network } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: '智能分析',
    description: '运用先进的AI算法，为机场和交通行业提供智能化解决方案'
  },
  {
    icon: Database,
    title: '大数据处理',
    description: '强大的数据处理能力，助力企业实现数据驱动决策'
  },
  {
    icon: Network,
    title: '智慧互联',
    description: '打造全方位互联的智慧机场生态系统'
  }
];

export function AISolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">AI 与大数据能力</h2>
          <p className="text-xl text-gray-300">领先的技术，驱动智慧未来</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all"
            >
              <feature.icon className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}