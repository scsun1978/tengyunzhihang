/*
  # Temporarily disable RLS for testing
  
  1. Changes
    - Temporarily disable RLS on news_comments table
    - Update join query structure
  
  Note: This is a temporary change for testing purposes only.
  Remember to re-enable RLS after testing!
*/

-- Temporarily disable RLS
ALTER TABLE news_comments DISABLE ROW LEVEL SECURITY;

-- Update join structure
CREATE OR REPLACE VIEW news_comments_with_users AS
SELECT 
  c.id,
  c.content,
  c.created_at,
  c.user_id,
  u.email as user_email
FROM news_comments c
LEFT JOIN auth.users u ON c.user_id = u.id;