/*
  # News System Database Schema

  1. New Tables
    - news_categories: News categories management
    - news_tags: News tags management
    - news_posts_tags: Junction table for posts and tags
    - news_likes: User likes on news posts
    - news_bookmarks: User bookmarks on news posts

  2. Changes
    - Add category_id to news_posts table
    - Add view_count and like_count to news_posts

  3. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
*/

-- News Categories
CREATE TABLE news_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  parent_id uuid REFERENCES news_categories(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX idx_news_categories_slug ON news_categories(slug);
CREATE INDEX idx_news_categories_parent ON news_categories(parent_id);

-- News Tags
CREATE TABLE news_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_news_tags_slug ON news_tags(slug);

-- Junction table for posts and tags
CREATE TABLE news_posts_tags (
  post_id uuid REFERENCES news_posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES news_tags(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (post_id, tag_id)
);

CREATE INDEX idx_news_posts_tags_post ON news_posts_tags(post_id);
CREATE INDEX idx_news_posts_tags_tag ON news_posts_tags(tag_id);

-- News Likes
CREATE TABLE news_likes (
  post_id uuid REFERENCES news_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (post_id, user_id)
);

CREATE INDEX idx_news_likes_post ON news_likes(post_id);
CREATE INDEX idx_news_likes_user ON news_likes(user_id);

-- News Bookmarks
CREATE TABLE news_bookmarks (
  post_id uuid REFERENCES news_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (post_id, user_id)
);

CREATE INDEX idx_news_bookmarks_post ON news_bookmarks(post_id);
CREATE INDEX idx_news_bookmarks_user ON news_bookmarks(user_id);

-- Add category to news_posts
ALTER TABLE news_posts 
  ADD COLUMN IF NOT EXISTS category_id uuid REFERENCES news_categories(id),
  ADD COLUMN IF NOT EXISTS view_count int DEFAULT 0,
  ADD COLUMN IF NOT EXISTS like_count int DEFAULT 0;

CREATE INDEX idx_news_posts_category ON news_posts(category_id);

-- Enable RLS
ALTER TABLE news_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_posts_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_bookmarks ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Categories
CREATE POLICY "Anyone can view categories"
  ON news_categories FOR SELECT
  TO public
  USING (true);

-- Tags
CREATE POLICY "Anyone can view tags"
  ON news_tags FOR SELECT
  TO public
  USING (true);

-- Posts Tags
CREATE POLICY "Anyone can view post tags"
  ON news_posts_tags FOR SELECT
  TO public
  USING (true);

-- Likes
CREATE POLICY "Anyone can view likes"
  ON news_likes FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage their likes"
  ON news_likes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Bookmarks
CREATE POLICY "Users can view their own bookmarks"
  ON news_bookmarks
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their bookmarks"
  ON news_bookmarks
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Helper Functions
CREATE OR REPLACE FUNCTION increment_like_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE news_posts
  SET like_count = like_count + 1
  WHERE id = NEW.post_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION decrement_like_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE news_posts
  SET like_count = GREATEST(like_count - 1, 0)
  WHERE id = OLD.post_id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers
CREATE TRIGGER news_likes_increment
  AFTER INSERT ON news_likes
  FOR EACH ROW
  EXECUTE FUNCTION increment_like_count();

CREATE TRIGGER news_likes_decrement
  AFTER DELETE ON news_likes
  FOR EACH ROW
  EXECUTE FUNCTION decrement_like_count();