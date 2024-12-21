export type AuthMode = 'login' | 'register';

export interface AuthFormData {
  email: string;
  password: string;
  username?: string;
}