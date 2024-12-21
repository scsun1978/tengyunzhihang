import type { Database } from '@/types/supabase';

export interface NewsItem {
  id: string;
  title: string;
  summary?: string;
  content: string;
  image: string;
  date: string;
  category: string;
  views?: number;
  likes?: number;
}

export type NewsFilter = {
  category?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
};

export type Comment = {
  id: string;
  content: string;
  author: string;
  date: string;
};

export type NewsResponse = Database['public']['Tables']['news_posts']['Row'];