import { motion } from 'framer-motion';
import { Plane, Users, Target, Award } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: '专业团队',
    description: '拥有航空、IT等多领域专家'
  },
  {
    icon: Target,
    title: '创新驱动',
    description: '持续技术创新，引领行业发展'
  },
  {
    icon: Award,
    title: '优质服务',
    description: '提供全方位的技术支持与服务'
  }
];

export function CompanyIntro() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">关于腾云智航</h2>
            <p className="text-gray-600 mb-6">
              腾云智航致力于为机场和交通行业提供智能化解决方案，通过创新技术提升运营效率，改善用户体验。我们的团队由航空、IT等多领域专家组成，始终以客户需求为导向，提供专业可靠的服务。
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <Plane className="w-6 h-6" />
              <span className="font-semibold">引领智慧机场，驱动未来交通</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}