import type { Product } from '../types';

// 产品线定义
export const productLines = [
  {
    id: 'smart-airport',
    name: '智慧机场产品线',
    description: '面向机场运营管理的智能化解决方案',
    target: '大型机场、枢纽机场'
  },
  {
    id: 'atc-network',
    name: '空管网络产品线',
    description: '面向空管系统的网络运维解决方案',
    target: '民航空管局、区域管理局'
  },
  {
    id: 'airline-it',
    name: '航空IT产品线',
    description: '面向航空公司的信息化解决方案',
    target: '航空公司'
  }
];

export const products: Product[] = [
  // 智慧机场产品线
  {
    id: 'smart-airport-pro',
    name: 'TengyunSmart Airport Pro',
    productLine: 'smart-airport',
    version: 'V3.0',
    description: '企业级智慧机场综合管理平台，提供全方位的机场运营管理能力。',
    type: 'core',
    features: [
      {
        title: '智能航班管理系统 FMS-3000',
        description: '基于AI的航班全生命周期管理系统',
        benefits: ['航班准点率提升15%', '机位利用率提升25%', '地面保障效率提升30%'],
        technicalDetails: ['分布式调度引擎', '多维度航班评分', 'AI预测模型']
      },
      {
        title: '智能安检系统 SEC-2000',
        description: '新一代智能安检管理平台',
        benefits: ['安检效率提升40%', '误报率降低60%', '旅客等待时间减少45%'],
        technicalDetails: ['深度学习算法', '多模态识别', '实时视频分析']
      }
    ],
    certifications: ['CAAC-CTSO-C201', 'ISO 27001', 'ISO 9001'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80'
  },
  {
    id: 'smart-airport-standard',
    name: 'TengyunSmart Airport Standard',
    productLine: 'smart-airport',
    version: 'V2.5',
    description: '面向中小型机场的智慧化管理解决方案。',
    type: 'core',
    features: [
      {
        title: '航班管理系统 FMS-2000',
        description: '标准版航班管理系统',
        benefits: ['航班准点率提升10%', '机位利用率提升20%'],
        technicalDetails: ['集中式调度', '基础预测模型']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80'
  },

  // 空管网络产品线
  {
    id: 'atc-network-pro',
    name: 'TengyunATC Network Pro',
    productLine: 'atc-network',
    version: 'V2.0',
    description: '专业级空管网络智能运维平台。',
    type: 'core',
    features: [
      {
        title: '网络智能运维系统 NMS-3000',
        description: '基于AIOps的网络运维平台',
        benefits: ['故障预测准确率95%', '平均修复时间减少60%', '运维效率提升50%'],
        technicalDetails: ['AIOps引擎', '智能告警分析', '自动化运维']
      }
    ],
    certifications: ['CAAC-ANS-001', 'ISO 27001'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },

  // 航空IT产品线
  {
    id: 'airline-lowcode-platform',
    name: 'TengyunAir LowCode Platform',
    productLine: 'airline-it',
    version: 'V2.0',
    description: '专为航空业务打造的低代码开发平台。',
    type: 'core',
    features: [
      {
        title: '低代码开发引擎 LCE-2000',
        description: '航空业务低代码开发平台',
        benefits: ['开发效率提升300%', '维护成本降低50%', '部署时间缩短80%'],
        technicalDetails: ['可视化开发', '航空组件库', '多端适配']
      }
    ],
    certifications: ['ISO 27001'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  }
];