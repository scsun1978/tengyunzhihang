import { useEffect } from 'react';

export function ReCaptcha() {
  useEffect(() => {
    // 这里实现 reCAPTCHA 集成
    // 为了演示，这里使用一个简单的占位符
  }, []);

  return (
    <div className="w-full h-[78px] bg-gray-50 rounded-md flex items-center justify-center">
      <span className="text-sm text-gray-500">验证码加载中...</span>
    </div>
  );
}