import { supabase } from '@/lib/supabase';
import type { CreateCommentData } from './types';
import type { CommentData } from './types';

export async function fetchComments(newsId: string) {
  return supabase
    .from('news_comments_with_users')
    .select('*')
    .eq('news_id', newsId)
    .order('created_at', { ascending: false });
}

export async function insertComment(data: CreateCommentData) {
  const { data: comment, error } = await supabase
    .from('news_comments')
    .insert(data)
    .select('*, users:user_id(email)')
    .single();

  if (error) throw error;
  if (!comment) throw new Error('评论创建失败');

  return comment;
}