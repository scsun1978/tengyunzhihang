import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">腾云智航</span>
            </Link>
            <p className="mt-4 text-gray-400">
              引领智慧机场，驱动未来交通
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">解决方案</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions#airport" className="text-gray-400 hover:text-white">
                  智慧机场解决方案
                </Link>
              </li>
              <li>
                <Link to="/solutions#atc" className="text-gray-400 hover:text-white">
                  空管网络运维解决方案
                </Link>
              </li>
              <li>
                <Link to="/solutions#airline" className="text-gray-400 hover:text-white">
                  航空IT解决方案
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">产品服务</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products#smart-airport" className="text-gray-400 hover:text-white">
                  智慧机场管理系统
                </Link>
              </li>
              <li>
                <Link to="/products#media-platform" className="text-gray-400 hover:text-white">
                  全媒体数字内容服务平台
                </Link>
              </li>
              <li>
                <Link to="/products#network-platform" className="text-gray-400 hover:text-white">
                  无线网络管理平台
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">联系我们</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>中国上海市浦东新区张江高科技园区</p>
              <p>企业微信：TengyunSmart</p>
              <p>邮箱：contact@aerocloudtech.com</p>
              <div className="mt-4">
                <p className="mb-1">关注我们：</p>
                <p>微信公众号：腾云智航</p>
                <p>小程序：腾云智航服务</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 腾云智航. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}