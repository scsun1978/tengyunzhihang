import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: 'airport',
    title: '智慧机场解决方案',
    description: '通过AI与大数据技术，为机场提供全方位的智能化管理系统，提升运营效率和服务质量。',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
    features: [
      {
        title: '智能航班管理',
        description: '基于AI的航班调度与管理系统',
        benefits: [
          '提高航班准点率',
          '优化机位分配',
          '减少延误时间'
        ],
        technicalDetails: [
          'AI调度算法',
          '实时数据分析',
          '多维度优化模型'
        ]
      },
      {
        title: '安检系统',
        description: '智能化安检与安防系统',
        benefits: [
          '提升安检效率',
          '降低误报率',
          '实时安全监控'
        ],
        technicalDetails: [
          '计算机视觉',
          '深度学习算法',
          '实时视频分析'
        ]
      }
    ],
    cases: [
      {
        title: '浦东机场旅客服务小程序项目',
        description: '为浦东机场开发的一站式旅客服务小程序，集成航班信息查询、智能行李追踪、室内导航等功能。',
        results: [
          '旅客满意度提升40%',
          '咨询服务效率提升60%',
          '人工服务成本降低30%'
        ]
      },
      {
        title: '浦东机场台账电子化低代码项目',
        description: '通过低代码平台快速开发的电子化台账系统，实现机场各类台账的数字化管理。',
        results: [
          '工作效率提升50%',
          '纸质文档减少90%',
          '数据准确率提升至99.9%'
        ]
      }
    ]
  },
  {
    id: 'atc',
    title: '空管网络运维解决方案',
    description: '为空管局提供智能化网络运维管理解决方案，保障网络安全和稳定运行。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    features: [
      {
        title: 'AI智能运维平台',
        description: '基于AI的网络智能运维系统',
        benefits: [
          '故障预测准确率提升60%',
          '问题解决时间缩短50%',
          '运维效率提升40%'
        ],
        technicalDetails: [
          'AIOps技术',
          '智能告警分析',
          '自动化运维'
        ]
      },
      {
        title: '网络安全防护',
        description: '智能化网络安全监测与防护系统',
        benefits: [
          '实时威胁检测',
          '自动化安全响应',
          '安全事件分析'
        ],
        technicalDetails: [
          '机器学习检测',
          '态势感知',
          '安全编排自动化'
        ]
      }
    ],
    cases: [
      {
        title: '某空管局网络运维项目',
        description: '实施AI智能运维平台，提升网络运维效率和安全性',
        results: [
          '网络可用性提升至99.999%',
          '故障处理时间减少65%',
          '运维人力成本降低40%'
        ]
      }
    ]
  },
  {
    id: 'airline',
    title: '航空IT解决方案',
    description: '为航空公司提供专业的软件开发和IT服务解决方案。',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80',
    features: [
      {
        title: '低代码开发平台',
        description: '快速应用开发与部署平台',
        benefits: [
          '开发效率提升300%',
          '维护成本降低50%',
          '业务响应更快速'
        ],
        technicalDetails: [
          '可视化开发',
          '组件化架构',
          '多端适配'
        ]
      },
      {
        title: '数据中台',
        description: '统一的数据管理与分析平台',
        benefits: [
          '数据整合效率提升',
          '数据应用便捷化',
          '数据价值最大化'
        ],
        technicalDetails: [
          '实时数据处理',
          '数据治理',
          '智能分析'
        ]
      }
    ],
    cases: [
      {
        title: '某航空公司低代码平台项目',
        description: '实施低代码开发平台，提升软件开发效率',
        results: [
          '应用开发周期缩短70%',
          'IT成本降低45%',
          '业务需求响应提速200%'
        ]
      }
    ]
  }
];