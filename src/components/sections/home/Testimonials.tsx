import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    content: '腾云智航的智慧机场解决方案帮助我们显著提升了运营效率，乘客满意度大幅提升。',
    author: '张总监',
    role: '机场运营总监',
    company: '某国际机场'
  },
  {
    content: '全媒体数字内容服务平台为我们带来了显著的广告收益增长，精准的投放效果令人印象深刻。',
    author: '李经理',
    role: '市场部经理',
    company: '某航空公司'
  },
  {
    content: '无线网络管理平台的稳定性和安全性给了我们很大的信心，技术支持团队反应迅速专业。',
    author: '王工程师',
    role: '技术总监',
    company: '某机场集团'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">客户评价</h2>
          <p className="text-xl text-gray-600">听听他们怎么说</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}