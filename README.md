# react-admin-client

## 简介

从工作中提取的管理后台相关业务场景以及通用组件，因为调试设备的限制所以采用了弱响应式的模式。

开发这个项目的原因：

1. 对于部分业务需求的实践和总结
2. 对于产品设计和交互体验上的学习和总结
3. 对于老代码的一种变相重构提升代码的质量和可读性
4. 对于 ```react``` ```dva``` ```antd``` 等当前流行框架和构建工具的学习和训练。

希望这个项目对其他同学能够起到帮助和借鉴的作用。

## 环境

编辑器使用 ```vscode``` ，依赖的安装建议使用 ```yarn``` 进行，```npm 5.x``` 安装某些依赖时会出错。

* ```node v8.5.0```
* ```react v16.2.0```
* ```antd v3.1.1```
* ```dva v.2.1.0```

## 公共组件

使用方法请查看demo中的组件列表模块

## 如何使用

```
npm run start
```

## 代码风格

```js``` 代码使用 ```dva``` 框架默认的 ```eslint``` 配置，```css``` 代码使用 ```csscomb``` 插件进行优化。

## 成就

1. 后台中必须使用到antd最新版本中的所有组件。

* Button 按钮 ✔️
* Icon 图标 ✔️ 
* Grid 栅格
* Layout 布局 ✔️ 
* Affix 固钉
* Breadcrumb 面包屑 ✔️ 
* Dropdown 下拉菜单 ✔️ 
* Menu 导航菜单 ✔️ 
* Pagiantion 分页 ✔️ 
* Steps 步骤条 ✔️ 
* AutoComplete 自动完成
* Cascader 级联选择
* Checkbox 多选框
* DatePicker 日期选择框
* Form 表单 ✔️ 
* Input 输入框 ✔️ 
* InputNumber 数字输入框
* Mention 提及
* Rate 评分
* Radio 单选框
* Select 选择器 ✔️ 
* Slider 滑动输入条
* Switch 开关 ✔️ 
* TreeSelect 树选择
* TimePicker 时间选择框
* Transfer 穿梭框
* Upload 上传 ✔️ 
* Avatar 头像 ✔️ 
* Badge 徽标数 ✔️ 
* Calendar 日历
* Card 卡片 ✔️ 
* Carousel 走马灯
* Collapse 折叠面板
* List 列表
* Popover 气泡卡片
* Tooltip 文字提示
* Table 表格 ✔️ 
* Tabs 标签页
* Tag 标签 ✔️ 
* Timeline 时间轴
* Tree 树形控件 ✔️
* Alert 警告提示
* Modal 对话框 ✔️ 
* Message 全局提示
* Notification 通知提醒框 ✔️ 
* Progress 进度条 ✔️ 
* Popconfirm 气泡确认框
* Spin 加载中
* Anchor 锚点 ✔️
* BackTop 回到顶部 ✔️ 
* Divider 分割线
* LocaleProvider 国际化 ✔️

2. 后台中必须使用到社区精选组件中不同类型的一个组件。