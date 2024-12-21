/*
  # Add Product News Content

  1. Changes
    - Insert new product-related news posts
    - Content focuses on internal product developments and innovations
    - Each news post includes title, content, and image URL
*/

INSERT INTO news_posts (title, content, image, created_at) VALUES
(
  '腾云智航发布新一代智慧机场管理系统 V3.0',
  '腾云智航今日正式发布智慧机场管理系统 V3.0版本，新版本在AI算法和用户体验方面都有重大突破。新增的特性包括：
  1. 基于深度学习的航班延误预测准确率提升至92%
  2. 新一代分布式调度引擎，支持10000+航班并发优化
  3. 全新的3D可视化机位管理界面
  4. 支持跨航站楼的智能资源调配
  
  该版本已在上海浦东国际机场完成为期3个月的测试，测试结果表明系统的整体性能提升超过50%，用户操作效率提升35%。',
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '2 days'
),
(
  '低代码开发平台成功应用于多家航空公司',
  '腾云智航自主研发的航空低代码开发平台在过去6个月内已成功服务3家国内主要航空公司，帮助客户快速开发和部署了超过50个业务应用。平台特点：
  1. 支持可视化拖拽开发
  2. 内置航空业务组件库
  3. 多端自适应部署
  4. 统一的数据治理能力
  
  通过该平台，客户的应用开发周期平均缩短70%，维护成本降低45%。',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '5 days'
),
(
  '空管网络运维AI平台获CAAC认证',
  '腾云智航自主研发的空管网络运维AI平台近日通过民航局CAAC认证，成为国内首个获得认证的空管网络智能运维系统。该平台具备：
  1. 智能故障预测与诊断
  2. 自动化运维响应
  3. 网络安全态势感知
  4. 全链路监控分析
  
  目前该平台已在两个区域管理局试点，故障预警准确率达到95%，平均故障处理时间减少60%。',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '10 days'
),
(
  '全媒体数字内容服务平台完成技术升级',
  '腾云智航全媒体数字内容服务平台完成新一轮技术升级，引入多项创新功能：
  1. 基于场景的智能内容分发
  2. 实时客流分析与广告投放
  3. 跨终端内容同步技术
  4. 新一代数据分析引擎
  
  升级后的平台已在某国际机场投入使用，广告点击率提升40%，用户停留时间增加25%。',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
  NOW() - INTERVAL '15 days'
);