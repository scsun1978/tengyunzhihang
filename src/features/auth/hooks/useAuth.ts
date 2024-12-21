import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import type { AuthError } from '@supabase/supabase-js';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleError = (error: AuthError) => {
    switch (error.message) {
      case 'Invalid login credentials':
        return '邮箱或密码错误';
      case 'Email not confirmed':
        return '请先验证邮箱';
      default:
        return error.message;
    }
  };

  const login = async (email: string, password: string, rememberMe: boolean) => {
    try {
      setLoading(true);
      setError(null);
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: {
          shouldCreateUser: false
        }
      });

      if (error) throw error;
      
      navigate('/');
    } catch (err) {
      setError(handleError(err as AuthError));
    } finally {
      setLoading(false);
    }
  };

  const register = async ({ email, password, username }: {
    email: string;
    password: string;
    username: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username
          }
        }
      });

      if (error) throw error;

      // 注册成功后自动登录
      await login(email, password, false);
    } catch (err) {
      setError(handleError(err as AuthError));
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (err) {
      setError(handleError(err as AuthError));
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    register,
    logout,
    loading,
    error
  };
}