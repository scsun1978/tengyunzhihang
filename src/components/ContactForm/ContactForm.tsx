import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { useContactForm } from './useContactForm';
import { Notification } from '../ui/Notification';

export function ContactForm() {
  const { formData, state, handleSubmit, updateField, clearNotification } = useContactForm();

  return (
    <>
      {state.notification && (
        <Notification
          type={state.notification.type}
          message={state.notification.message}
          onClose={clearNotification}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">联系我们</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="姓名"
              type="text"
              required
              value={formData.name}
              onChange={updateField('name')}
              error={state.errors.find(e => e.field === 'name')?.message}
            />
            <FormInput
              label="公司"
              type="text"
              required
              value={formData.company}
              onChange={updateField('company')}
              error={state.errors.find(e => e.field === 'company')?.message}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="邮箱"
              type="email"
              required
              value={formData.email}
              onChange={updateField('email')}
              error={state.errors.find(e => e.field === 'email')?.message}
            />
            <FormInput
              label="电话"
              type="tel"
              required
              value={formData.phone}
              onChange={updateField('phone')}
              error={state.errors.find(e => e.field === 'phone')?.message}
            />
          </div>

          <FormTextarea
            label="留言"
            rows={4}
            value={formData.message}
            onChange={updateField('message')}
            error={state.errors.find(e => e.field === 'message')?.message}
          />

          <button
            type="submit"
            disabled={state.isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.isSubmitting ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <Send size={20} />
            )}
            {state.isSubmitting ? '提交中...' : '提交'}
          </button>
        </form>
      </motion.div>
    </>
  );
}