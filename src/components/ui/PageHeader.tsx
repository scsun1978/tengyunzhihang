import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}