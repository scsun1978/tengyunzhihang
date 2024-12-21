import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2020',
    title: '公司成立',
    description: '腾云智航在上海成立，开始智慧机场解决方案研发'
  },
  {
    year: '2021',
    title: '首个项目落地',
    description: '智慧机场解决方案在多个机场成功部署'
  },
  {
    year: '2022',
    title: '技术突破',
    description: 'AI算法获得重大突破，处理效率提升300%'
  },
  {
    year: '2023',
    title: '业务扩展',
    description: '业务范围扩展至铁路等交通领域'
  }
];

export function Timeline() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          发展历程
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="flex-1 md:w-1/2" />
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white" />
                </div>
                <div className="flex-1 md:w-1/2 p-6 bg-white rounded-lg shadow-md">
                  <div className="text-blue-600 font-bold mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}