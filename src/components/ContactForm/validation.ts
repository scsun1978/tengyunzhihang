import type { ContactFormData } from './types';

export interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}

export function validateForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name.trim()) {
    errors.push({ field: 'name', message: '请输入姓名' });
  }

  if (!data.company.trim()) {
    errors.push({ field: 'company', message: '请输入公司名称' });
  }

  if (!data.email.trim()) {
    errors.push({ field: 'email', message: '请输入邮箱地址' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: '请输入有效的邮箱地址' });
  }

  if (!data.phone.trim()) {
    errors.push({ field: 'phone', message: '请输入电话号码' });
  } else if (!/^[0-9-+\s()]{8,}$/.test(data.phone)) {
    errors.push({ field: 'phone', message: '请输入有效的电话号码' });
  }

  if (!data.message.trim()) {
    errors.push({ field: 'message', message: '请输入留言内容' });
  }

  return errors;
}