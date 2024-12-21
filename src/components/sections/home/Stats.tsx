import { motion } from 'framer-motion';
import { Users, Building2, Award, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: '服务客户',
    description: '遍布全国的客户群体'
  },
  {
    icon: Building2,
    value: '50+',
    label: '合作机场',
    description: '覆盖国内主要机场'
  },
  {
    icon: Award,
    value: '20+',
    label: '行业认证',
    description: '国际标准认证'
  },
  {
    icon: Globe2,
    value: '24/7',
    label: '全天候服务',
    description: '专业技术支持'
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
              <p className="text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}