import { motion } from 'framer-motion';
import { Calendar, Eye, ThumbsUp, Share2 } from 'lucide-react';
import type { NewsItem } from '../types';

interface NewsContentProps {
  news: NewsItem;
  onLike: () => void;
  onShare: () => void;
}

export function NewsContent({ news, onLike, onShare }: NewsContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* 封面图片 */}
      <div className="relative aspect-video">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 文章内容 */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{news.title}</h1>
        
        {/* 元信息 */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <span>{news.views}</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span>{news.likes}</span>
          </div>
        </div>

        {/* 正文内容 */}
        <div className="prose prose-lg max-w-none mb-8">
          {news.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {/* 互动按钮 */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onLike}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            <ThumbsUp className="w-5 h-5" />
            点赞
          </button>
          <button
            onClick={onShare}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            <Share2 className="w-5 h-5" />
            分享
          </button>
        </div>
      </div>
    </motion.article>
  );
}