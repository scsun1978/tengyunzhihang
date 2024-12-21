/*
  # Initial Schema Setup for TengYun Smart Aviation

  1. New Tables
    - contacts
      - Stores contact form submissions
      - Fields for name, company, email, phone, message
    - news_posts
      - Stores news and updates
      - Fields for title, content, image URL

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  processed boolean DEFAULT false
);

-- Create news_posts table
CREATE TABLE IF NOT EXISTS news_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_posts ENABLE ROW LEVEL SECURITY;

-- Policies for contacts
CREATE POLICY "Admins can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for news_posts
CREATE POLICY "Anyone can read news posts"
  ON news_posts
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admins can manage news posts"
  ON news_posts
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');