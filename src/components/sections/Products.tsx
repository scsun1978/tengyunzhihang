import { motion } from 'framer-motion';
import { Monitor, Wifi, FileDigit } from 'lucide-react';

const products = [
  {
    icon: FileDigit,
    title: '全媒体数字内容智能服务',
    description: '智能化内容管理与分发系统，为机场提供全方位的数字媒体解决方案'
  },
  {
    icon: Wifi,
    title: '无线网络管理平台',
    description: '专业的机场无线网络管理系统，确保网络服务的稳定性与安全性'
  },
  {
    icon: Monitor,
    title: '智慧机场解决方案',
    description: '整合AI与大数据技术，打造智能化机场管理系统'
  }
];

export function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">产品服务</h2>
          <p className="text-xl text-gray-600">创新技术，智慧服务</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <product.icon className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}