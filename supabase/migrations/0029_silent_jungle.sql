-- Drop existing table
DROP TABLE IF EXISTS news_comments CASCADE;

-- Create news_comments table
CREATE TABLE news_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id uuid REFERENCES news_posts(id) ON DELETE CASCADE NOT NULL,
  user_id uuid NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Add foreign key constraint to auth.users
ALTER TABLE news_comments
  ADD CONSTRAINT news_comments_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES auth.users(id)
  ON DELETE CASCADE;

-- Create indexes
CREATE INDEX idx_news_comments_news_id ON news_comments(news_id);
CREATE INDEX idx_news_comments_user_id ON news_comments(user_id);
CREATE INDEX idx_news_comments_created_at ON news_comments(created_at DESC);

-- Enable RLS
ALTER TABLE news_comments ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view comments"
  ON news_comments FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON news_comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create view for comments with user information
CREATE OR REPLACE VIEW news_comments_with_users AS
SELECT 
  c.id,
  c.news_id,
  c.content,
  c.created_at,
  c.user_id,
  u.email as user_email
FROM news_comments c
JOIN auth.users u ON c.user_id = u.id;