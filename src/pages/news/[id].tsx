import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { NewsContent } from './detail/NewsContent';
import { NewsComments } from './detail/NewsComments';
import { AuthModal } from '@/components/auth/AuthModal';
import { useAuth } from '@/hooks/useAuth';
import { getNewsDetail } from '@/lib/services/news';
import { getComments, addComment } from '@/lib/services/comments';
import type { NewsItem, Comment } from './types';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      
      try {
        const [newsData, commentsData] = await Promise.all([
          getNewsDetail(id),
          getComments(id)
        ]);
        setNews(newsData);
        setComments(commentsData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('加载失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handleComment = async (content: string) => {
    if (!id || !user) {
      setShowAuthModal(true);
      return;
    }

    try {
      const newComment = await addComment(id, content);
      setComments(prev => [newComment, ...prev]);
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600 py-8">{error}</div>;
  if (!news) return <div className="text-center text-gray-600 py-8">新闻不存在</div>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <NewsContent news={news} />
        <NewsComments
          comments={comments}
          onSubmitComment={handleComment}
          isAuthenticated={!!user}
          onShowAuth={() => setShowAuthModal(true)}
        />
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => setShowAuthModal(false)}
        />
      </div>
    </Layout>
  );
}