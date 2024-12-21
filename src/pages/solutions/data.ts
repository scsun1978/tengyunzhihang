import type { Solution } from './types';

export const solutions: Solution[] = [
  {
    id: 'airport',
    title: '机场解决方案',
    description: '为机场提供全方位的智能化管理系统，提升运营效率和服务质量。',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
    features: [
      '智能航站楼管理',
      '行李处理系统',
      '安防监控系统',
      '旅客服务系统'
    ]
  },
  {
    id: 'railway',
    title: '铁路解决方案',
    description: '智能化铁路运输管理系统，优化调度效率，提升服务体验。',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80',
    features: [
      '智能调度系统',
      '客运服务系统',
      '安全监控系统',
      '设备维护系统'
    ]
  }
];