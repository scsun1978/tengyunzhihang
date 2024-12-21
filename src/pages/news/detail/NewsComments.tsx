import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, LogIn } from 'lucide-react';
import type { Comment } from '../types';

interface NewsCommentsProps {
  comments: Comment[];
  onSubmitComment: (content: string) => Promise<void>;
  isAuthenticated: boolean;
  onShowAuth: () => void;
}

export function NewsComments({ 
  comments, 
  onSubmitComment, 
  isAuthenticated,
  onShowAuth 
}: NewsCommentsProps) {
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || submitting) return;

    setSubmitting(true);
    try {
      await onSubmitComment(comment);
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MessageSquare className="w-6 h-6" />
        评论区
      </h2>

      {/* 评论列表 */}
      <div className="space-y-6 mb-8">
        {comments.length === 0 ? (
          <p className="text-center text-gray-500 py-8">暂无评论</p>
        ) : (
          comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{comment.author}</h3>
                  <p className="text-sm text-gray-500">{comment.date}</p>
                </div>
              </div>
              <p className="text-gray-600">{comment.content}</p>
            </motion.div>
          ))
        )}
      </div>

      {/* 评论输入框 */}
      {isAuthenticated ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="写下你的评论..."
            className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={submitting || !comment.trim()}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {submitting ? '提交中...' : '发表评论'}
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-gray-600 mb-4">登录后即可发表评论</p>
          <button
            onClick={onShowAuth}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mx-auto"
          >
            <LogIn className="w-4 h-4" />
            登录/注册
          </button>
        </div>
      )}
    </div>
  );
}