import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NewsItem } from '../types';

interface NewsCardProps extends NewsItem {}

export function NewsCard({ 
  id,
  title, 
  summary, 
  image, 
  date,
  views,
  likes 
}: NewsCardProps) {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80';

  return (
    <Link to={`/news/${id}`}>
      <motion.article 
        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        whileHover={{ y: -4 }}
      >
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <img
            src={imageError ? fallbackImage : image}
            alt={title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{summary}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}