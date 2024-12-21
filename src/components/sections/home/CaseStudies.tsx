import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    id: 'pudong-miniapp',
    title: '浦东机场旅客服务小程序',
    description: '为浦东机场开发的一站式旅客服务小程序，集成航班信息查询、智能行李追踪、室内导航等功能。',
    image: 'https://images.unsplash.com/photo-1512236258305-32fb110fdb01?auto=format&fit=crop&q=80',
    results: [
      '旅客满意度提升40%',
      '咨询服务效率提升60%',
      '人工服务成本降低30%'
    ]
  },
  {
    id: 'pudong-lowcode',
    title: '浦东机场台账电子化低代码项目',
    description: '通过低代码平台快速开发的电子化台账系统，实现机场各类台账的数字化管理。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    results: [
      '工作效率提升50%',
      '纸质文档减少90%',
      '数据准确率提升至99.9%'
    ]
  },
  {
    id: 'pudong-security',
    title: '浦东机场智能安检系统',
    description: '基于AI的智能安检系统，提高安检效率和准确率。',
    image: 'https://images.unsplash.com/photo-1584432743501-7d5c27a39189?auto=format&fit=crop&q=80',
    results: [
      '安检效率提升35%',
      '误报率降低60%',
      '旅客等待时间减少45%'
    ]
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">成功案例</h2>
          <p className="text-xl text-gray-600">探索我们的实践成果</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 relative">
                <img
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{case_.title}</h3>
                <p className="text-gray-600 mb-4">{case_.description}</p>
                <div className="space-y-2 mb-6">
                  {case_.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            查看更多案例
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}