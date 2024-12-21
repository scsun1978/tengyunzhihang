-- Drop existing view if exists
DROP VIEW IF EXISTS news_comments_with_users;

-- Ensure proper foreign key relationship
ALTER TABLE news_comments DROP CONSTRAINT IF EXISTS news_comments_user_id_fkey;
ALTER TABLE news_comments
  ADD CONSTRAINT news_comments_user_id_fkey
  FOREIGN KEY (user_id)
  REFERENCES auth.users(id)
  ON DELETE CASCADE;

-- Create RLS policies for proper joins
CREATE POLICY "Enable read access to auth.users for comments"
  ON news_comments FOR SELECT
  TO public
  USING (true);