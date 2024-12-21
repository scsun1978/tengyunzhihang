import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { ContactFormData } from './types';
import { validateForm, type ValidationError } from './validation';

const initialFormData: ContactFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
};

interface ContactFormState {
  isSubmitting: boolean;
  notification: {
    type: 'success' | 'error';
    message: string;
  } | null;
  errors: ValidationError[];
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [state, setState] = useState<ContactFormState>({
    isSubmitting: false,
    notification: null,
    errors: []
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      setState(prev => ({ ...prev, errors: validationErrors }));
      return;
    }

    setState(prev => ({ ...prev, isSubmitting: true, errors: [] }));

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);
      
      if (error) throw error;
      
      setFormData(initialFormData);
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        notification: {
          type: 'success',
          message: '感谢您的留言，我们会尽快与您联系！'
        }
      }));
    } catch (error) {
      console.error('Error submitting form:', error);
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        notification: {
          type: 'error',
          message: '提交失败，请稍后重试'
        }
      }));
    }
  };

  const updateField = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear field-specific error when user starts typing
    setState(prev => ({
      ...prev,
      errors: prev.errors.filter(error => error.field !== field)
    }));
  };

  const clearNotification = () => {
    setState(prev => ({ ...prev, notification: null }));
  };

  return {
    formData,
    state,
    handleSubmit,
    updateField,
    clearNotification
  };
}