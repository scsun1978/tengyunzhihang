import type { AICapability } from '../types';

export const capabilities: AICapability[] = [
  {
    id: 'computer-vision',
    title: '计算机视觉',
    description: '基于深度学习的智能视觉分析系统，为机场安检、行李分拣、客流分析等场景提供高精度识别能力。',
    image: 'https://images.unsplash.com/photo-1584432743501-7d5c27a39189?auto=format&fit=crop&q=80',
    features: [
      {
        title: '智能安检系统',
        description: '基于多模态深度学习的安检物品识别系统',
        benefits: [
          '违禁品识别准确率达99.9%',
          '安检效率提升45%',
          '误报率降低60%'
        ],
        technicalDetails: [
          'YOLOv8目标检测',
          '多模态特征融合',
          '知识蒸馏模型优化'
        ]
      },
      {
        title: '客流分析系统',
        description: '实时客流密度分析与预测系统',
        benefits: [
          '客流预测准确率90%+',
          '拥堵预警提前15分钟',
          '人员配置优化35%'
        ],
        technicalDetails: [
          '人群密度估计',
          '轨迹预测算法',
          '时空数据分析'
        ]
      }
    ],
    applications: [
      {
        title: '智能安检系统',
        description: '应用于机场安检通道，提供实时违禁品识别',
        benefits: [
          '日均处理10万+旅客行李',
          '识别准确率99.9%',
          '处理速度<0.5秒/件'
        ]
      }
    ]
  },
  {
    id: 'machine-learning',
    title: '机器学习与预测分析',
    description: '融合多源数据的智能预测分析系统，为航班调度、资源分配提供决策支持。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    features: [
      {
        title: '航班延误预测',
        description: '基于多因素分析的航班延误预测系统',
        benefits: [
          '预测准确率达92%',
          '提前2小时预警',
          '减少旅客等待时间40%'
        ],
        technicalDetails: [
          'LSTM时序预测',
          'XGBoost集成学习',
          '多因素相关性分析'
        ]
      },
      {
        title: '资源智能调度',
        description: '机场资源优化配置系统',
        benefits: [
          '资源利用率提升30%',
          '运营成本降低25%',
          '服务效率提升40%'
        ],
        technicalDetails: [
          '强化学习算法',
          '约束优化求解',
          '动态规划调度'
        ]
      }
    ],
    applications: [
      {
        title: '智能航班管理系统',
        description: '应用于航班全生命周期管理',
        benefits: [
          '日均优化调度3000+航班',
          '准点率提升15%',
          '地面保障效率提升30%'
        ]
      }
    ]
  },
  {
    id: 'nlp',
    title: '自然语言处理',
    description: '智能语言理解与处理系统，为旅客服务、智能客服等场景提供语言交互能力。',
    image: 'https://images.unsplash.com/photo-1512236258305-32fb110fdb01?auto=format&fit=crop&q=80',
    features: [
      {
        title: '智能问答系统',
        description: '基于知识图谱的智能问答引擎',
        benefits: [
          '问题解答准确率95%',
          '响应时间<1秒',
          '支持多语言交互'
        ],
        technicalDetails: [
          'BERT语义理解',
          '知识图谱推理',
          '多轮对话管理'
        ]
      }
    ],
    applications: [
      {
        title: '机场智能客服',
        description: '7*24小时智能客服系统',
        benefits: [
          '日均处理5万+咨询',
          '用户满意度90%+',
          '人工坐席成本降低60%'
        ]
      }
    ]
  }
];