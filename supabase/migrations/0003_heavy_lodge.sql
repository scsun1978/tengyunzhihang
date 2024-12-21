/*
  # Update Product News Content

  1. Changes
    - Remove funding and award-related news
    - Focus on product development and technical achievements
    - Update existing news with more technical details
*/

-- First, clear existing news
DELETE FROM news_posts;

-- Insert updated news content
INSERT INTO news_posts (title, content, image, created_at) VALUES
(
  '智慧机场管理系统V3.0技术升级完成',
  '腾云智航完成智慧机场管理系统V3.0版本升级，新版本在核心技术方面取得突破：

  1. 新一代AI引擎
     - 航班延误预测准确率提升至92%
     - 支持多场景联动分析
     - 新增天气影响因子分析模型

  2. 分布式调度系统
     - 单机支持10000+航班并发优化
     - 调度延迟降低至100ms以内
     - 新增应急预案自动响应机制

  3. 3D可视化升级
     - 支持机位实时状态展示
     - 新增跑道除冰车辆调度功能
     - 地面设备智能监控
  
  目前系统已在浦东机场完成测试，性能和效率显著提升。',
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '2 days'
),
(
  '低代码平台完成行业组件库扩充',
  '腾云智航航空低代码开发平台完成行业组件库重大升级：

  1. 新增组件
     - 航班动态展示组件
     - 机位分配看板
     - 行李分拣监控
     - 旅客流量分析

  2. 性能优化
     - 组件加载速度提升60%
     - 数据刷新延迟降低至300ms
     - 支持大规模数据实时渲染

  3. 开发体验提升
     - 新增可视化配置界面
     - 支持组件间联动配置
     - 提供预设场景模板
  
  目前平台已服务多家航空公司，显著提升了应用开发效率。',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '5 days'
),
(
  '空管网络运维平台完成CAAC适航认证测试',
  '腾云智航空管网络运维AI平台完成CAAC适航认证全部测试项目：

  1. 安全性测试
     - 网络攻击防护能力验证
     - 故障隔离机制测试
     - 数据安全保护评估

  2. 可靠性测试
     - 7*24小时稳定性测试
     - 极限负载测试
     - 故障恢复能力验证

  3. 功能性测试
     - 智能告警准确率测试
     - 自动化运维流程验证
     - 监控覆盖率评估
  
  平台预计将于下月正式投入使用。',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '10 days'
),
(
  '数字内容服务平台发布场景化推荐引擎',
  '腾云智航全媒体数字内容服务平台发布新一代场景化推荐引擎：

  1. 技术创新
     - 基于知识图谱的内容理解
     - 实时行为分析算法
     - 多模态数据融合技术

  2. 功能特点
     - 支持多场景内容智能分发
     - 个性化推荐精准度提升
     - 广告投放效果优化

  3. 应用效果
     - 内容点击率提升40%
     - 用户停留时间增长25%
     - 广告转化效果提升35%
  
  新版本已在某国际机场成功部署。',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '15 days'
);