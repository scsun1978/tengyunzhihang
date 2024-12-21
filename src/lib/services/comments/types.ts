export interface CommentData {
  id: string;
  content: string;
  created_at: string;
  user_email: string | null;
}

export interface CreateCommentData {
  news_id: string;
  user_id: string;
  content: string;
}