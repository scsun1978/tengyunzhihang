import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { AuthModal } from '@/components/auth/AuthModal';
import { signOut } from '@/lib/services/auth';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">腾云智航</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/solutions" className="text-gray-700 hover:text-blue-600">解决方案</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">产品服务</Link>
            <Link to="/ai-capabilities" className="text-gray-700 hover:text-blue-600">AI能力</Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600">新闻动态</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">关于我们</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">联系我们</Link>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">{user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-blue-600"
                >
                  退出
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <LogIn className="w-5 h-5" />
                登录/注册
              </button>
            )}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
              解决方案
            </Link>
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
              产品服务
            </Link>
            <Link to="/ai-capabilities" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
              AI能力
            </Link>
            <Link to="/news" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
              新闻动态
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
              关于我们
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
              联系我们
            </Link>
            {user ? (
              <>
                <div className="px-3 py-2 text-gray-700">{user.email}</div>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50"
                >
                  退出
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="block w-full text-left px-3 py-2 text-blue-600 hover:bg-blue-50"
              >
                登录/注册
              </button>
            )}
          </div>
        </motion.div>
      )}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />
    </nav>
  );
}