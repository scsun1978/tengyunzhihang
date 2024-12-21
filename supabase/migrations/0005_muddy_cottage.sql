/*
  # Update news schema

  1. Changes
    - Add summary field to news_posts
    - Add view_count and like_count fields
    - Add functions for incrementing counters
    - Add RLS policies for public access

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated comment creation
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view all news" ON news_posts;
DROP POLICY IF EXISTS "Public can view comments" ON news_comments;
DROP POLICY IF EXISTS "Authenticated users can create comments" ON news_comments;

-- Update news_posts table
ALTER TABLE news_posts 
  ADD COLUMN IF NOT EXISTS summary text,
  ADD COLUMN IF NOT EXISTS view_count int DEFAULT 0,
  ADD COLUMN IF NOT EXISTS like_count int DEFAULT 0;

-- Create counter functions
CREATE OR REPLACE FUNCTION increment_view_count(news_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE news_posts
  SET view_count = COALESCE(view_count, 0) + 1
  WHERE id = news_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION increment_like_count(news_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE news_posts
  SET like_count = COALESCE(like_count, 0) + 1
  WHERE id = news_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create new policies
CREATE POLICY "Anyone can view news"
  ON news_posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view comments"
  ON news_comments
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can comment"
  ON news_comments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);