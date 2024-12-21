import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/PageHeader';
import { NewsCard } from './components/NewsCard';
import { NewsFilter } from './components/NewsFilter';
import { getNewsItems } from '@/lib/services/news';
import type { NewsItem, NewsFilter as FilterType } from './types';

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const items = await getNewsItems();
        setNews(items);
      } catch (err) {
        setError('获取新闻失败，请稍后重试');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  const handleFilter = (filter: FilterType) => {
    setLoading(true);
    // 实现过滤逻辑
    setLoading(false);
  };

  return (
    <Layout>
      <PageHeader 
        title="新闻动态"
        description="了解腾云智航最新动态"
        image="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <NewsFilter onFilter={handleFilter} />
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : news.length === 0 ? (
          <div className="text-center text-gray-600 py-8">暂无新闻</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NewsCard {...item} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}