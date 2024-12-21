import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const clients = [
  {
    name: '北京首都国际机场',
    logo: 'https://images.unsplash.com/photo-1577742442292-2b43ade404cb?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: '上海浦东国际机场',
    logo: 'https://images.unsplash.com/photo-1577742442292-2b43ade404cb?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: '广州白云国际机场',
    logo: 'https://images.unsplash.com/photo-1577742442292-2b43ade404cb?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: '深圳宝安国际机场',
    logo: 'https://images.unsplash.com/photo-1577742442292-2b43ade404cb?auto=format&fit=crop&q=80&w=200'
  }
];

export function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">合作伙伴</h2>
          <p className="text-xl text-gray-600">携手共创智慧交通新未来</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-24 object-contain mb-4"
              />
              <p className="text-center text-gray-700 font-medium">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}