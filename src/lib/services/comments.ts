import { supabase } from '@/lib/supabase';
import type { Comment } from '@/pages/news/types';

export async function getComments(newsId: string): Promise<Comment[]> {
  try {
    const { data, error } = await supabase
      .from('news_comments_with_users')
      .select('*')
      .eq('news_id', newsId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return (data || []).map((comment): Comment => ({
      id: comment.id,
      content: comment.content,
      author: comment.username || comment.user_email || '匿名用户',
      date: new Date(comment.created_at).toLocaleDateString('zh-CN')
    }));
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
    const { data, error } = await supabase
      .from('news_comments')
      .insert({
        news_id: newsId,
        user_id: user.id,
        content
      })
      .select()
      .single();

    if (error) throw error;
    if (!data) throw new Error('评论创建失败');

    return {
      id: data.id,
      content: data.content,
      author: user.user_metadata?.username || user.email || '匿名用户',
      date: new Date(data.created_at).toLocaleDateString('zh-CN')
    };
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}