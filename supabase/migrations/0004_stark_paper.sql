/*
  # News System Schema Update

  1. New Tables
    - `news_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `summary` (text)
      - `author` (text)
      - `publish_time` (timestamptz)
      - `view_count` (int)
      - `like_count` (int)
      - `cover_image` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `news_comments`
      - `id` (uuid, primary key)
      - `news_id` (uuid, foreign key)
      - `user_id` (uuid, foreign key)
      - `content` (text)
      - `created_at` (timestamptz)
    
    - `news_tags`
      - `id` (uuid, primary key)
      - `name` (text)
      - `created_at` (timestamptz)
    
    - `news_posts_tags`
      - `news_id` (uuid, foreign key)
      - `tag_id` (uuid, foreign key)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated user comments
*/

-- News Posts Table
CREATE TABLE IF NOT EXISTS news_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  summary text,
  author text NOT NULL,
  publish_time timestamptz DEFAULT now(),
  view_count int DEFAULT 0,
  like_count int DEFAULT 0,
  cover_image text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- News Comments Table
CREATE TABLE IF NOT EXISTS news_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  news_id uuid REFERENCES news_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- News Tags Table
CREATE TABLE IF NOT EXISTS news_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- News Posts Tags Junction Table
CREATE TABLE IF NOT EXISTS news_posts_tags (
  news_id uuid REFERENCES news_posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES news_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (news_id, tag_id)
);

-- Enable RLS
ALTER TABLE news_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_posts_tags ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public can view all news"
  ON news_posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view comments"
  ON news_comments
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON news_comments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Public can view tags"
  ON news_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view news_posts_tags"
  ON news_posts_tags
  FOR SELECT
  TO public
  USING (true);

-- Functions
CREATE OR REPLACE FUNCTION increment_view_count(news_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE news_posts
  SET view_count = view_count + 1
  WHERE id = news_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION increment_like_count(news_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE news_posts
  SET like_count = like_count + 1
  WHERE id = news_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;