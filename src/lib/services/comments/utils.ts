import type { CommentData } from './types';
import type { Comment } from '@/pages/news/types';

export function formatComment(data: CommentData): Comment {
  return {
    id: data.id,
    content: data.content,
    author: data.username || data.user_email || '匿名用户',
    date: new Date(data.created_at).toLocaleDateString('zh-CN')
  };
}

export function handleError(error: any): never {
  console.error('Comments service error:', error);
  throw new Error(error.message || '操作失败，请重试');
}