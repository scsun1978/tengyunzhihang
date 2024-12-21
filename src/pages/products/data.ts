import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'media',
    title: '全媒体数字内容智能服务',
    description: '为机场提供全方位的数字媒体解决方案，实现智能化内容管理与分发。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    features: [
      '智能内容管理系统',
      '多渠道内容分发',
      '数据分析与报告',
      '个性化推荐引擎'
    ],
    benefits: [
      '提升内容管理效率',
      '优化用户体验',
      '增强营销效果',
      '降低运营成本'
    ]
  },
  {
    id: 'network',
    title: '无线网络管理平台',
    description: '专业的机场无线网络管理系统，确保网络服务的稳定性与安全性。',
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80',
    features: [
      '实时网络监控',
      '智能负载均衡',
      '安全威胁检测',
      '用户行为分析'
    ],
    benefits: [
      '提升网络性能',
      '增强安全防护',
      '优化资源配置',
      '改善用户体验'
    ]
  }
];