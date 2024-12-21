import { motion } from 'framer-motion';
import { MapPin, Mail, QrCode, MessageSquare } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: '地址',
    content: '上海市浦东新区张江高科技园区'
  },
  {
    icon: MessageSquare,
    title: '企业微信',
    content: 'TengyunSmart'
  },
  {
    icon: Mail,
    title: '邮箱',
    content: 'contact@aerocloudtech.com'
  },
  {
    icon: QrCode,
    title: '关注我们',
    content: '微信公众号：腾云智航\n小程序：腾云智航服务'
  }
];

export function ContactInfo() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <item.icon className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
        </motion.div>
      ))}
    </div>
  );
}