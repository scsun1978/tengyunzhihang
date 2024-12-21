/*
  # Fix News Comments Authentication and Permissions

  1. Changes
    - Drop and recreate news_comments table with proper auth relationship
    - Add proper indexes and foreign key constraints
    - Update RLS policies for better security

  2. Security
    - Enable RLS
    - Add policies for viewing and creating comments
    - Ensure proper user authentication checks
*/

-- Drop existing table if exists
DROP TABLE IF EXISTS news_comments;

-- Create news_comments table with proper relationships
CREATE TABLE news_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id uuid REFERENCES news_posts(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX news_comments_news_id_idx ON news_comments(news_id);
CREATE INDEX news_comments_user_id_idx ON news_comments(user_id);
CREATE INDEX news_comments_created_at_idx ON news_comments(created_at DESC);

-- Enable RLS
ALTER TABLE news_comments ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can view comments"
  ON news_comments FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON news_comments FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM news_posts WHERE id = news_id
    )
  );