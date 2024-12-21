import { supabase } from '@/lib/supabase';
import type { NewsItem } from '@/pages/news/types';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80';

export async function getNewsItems(): Promise<NewsItem[]> {
  try {
    const { data, error } = await supabase
      .from('news_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map((post): NewsItem => ({
      id: post.id,
      title: post.title,
      summary: post.summary || post.content.substring(0, 200) + '...',
      content: post.content,
      image: post.cover_image || DEFAULT_IMAGE,
      date: new Date(post.created_at).toLocaleDateString('zh-CN'),
      category: '公司新闻',
      views: post.view_count || 0,
      likes: post.like_count || 0
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('获取新闻列表失败');
  }
}

export async function getNewsDetail(id: string): Promise<NewsItem> {
  try {
    // 先增加浏览量
    try {
      await supabase.rpc('increment_view_count', { news_id: id });
    } catch (error) {
      console.warn('Failed to increment view count:', error);
    }

    const { data, error } = await supabase
      .from('news_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) throw new Error('新闻不存在');

    return {
      id: data.id,
      title: data.title,
      content: data.content,
      summary: data.summary || data.content.substring(0, 200) + '...',
      image: data.cover_image || DEFAULT_IMAGE,
      date: new Date(data.created_at).toLocaleDateString('zh-CN'),
      category: '公司新闻',
      views: data.view_count || 0,
      likes: data.like_count || 0
    };
  } catch (error) {
    console.error('Error fetching news detail:', error);
    throw new Error('获取新闻详情失败');
  }
}