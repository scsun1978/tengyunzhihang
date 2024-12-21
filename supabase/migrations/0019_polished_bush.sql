/*
  # Fix comments table and view

  1. Changes
    - Drop existing view and table
    - Recreate table with proper structure
    - Add indexes for performance
    - Update RLS policies
    
  2. Security
    - Enable RLS
    - Add policies for public viewing and authenticated commenting
*/

-- Drop dependent view first
DROP VIEW IF EXISTS news_comments_with_users;

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can view comments" ON news_comments;
DROP POLICY IF EXISTS "Authenticated users can create comments" ON news_comments;

-- Drop and recreate table
DROP TABLE IF EXISTS news_comments;

CREATE TABLE news_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id uuid REFERENCES news_posts(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_news_comments_news_id ON news_comments(news_id);
CREATE INDEX IF NOT EXISTS idx_news_comments_user_id ON news_comments(user_id);
CREATE INDEX IF NOT EXISTS idx_news_comments_created_at ON news_comments(created_at DESC);

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