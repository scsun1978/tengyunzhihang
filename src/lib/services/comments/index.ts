import { supabase } from '@/lib/supabase';
import type { Comment } from '@/pages/news/types';
import { fetchComments, insertComment } from './queries';
import { formatComment, handleError } from './utils';

export async function getComments(newsId: string): Promise<Comment[]> {
  try {
    const { data, error } = await fetchComments(newsId);
    if (error) throw error;
    return (data || []).map(formatComment);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

export async function addComment(newsId: string, content: string): Promise<Comment> {
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    throw new Error('请先登录');
  }

  try {
    const data = await insertComment({
      news_id: newsId,
      user_id: user.id,
      content
    });
    
    return formatComment(data);
  } catch (error) {
    return handleError(error);
  }
}