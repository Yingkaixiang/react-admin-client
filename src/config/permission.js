/**
 * 权限列表
 * @param {number} type 权限类型
 * 0 在侧边栏中展示
 * 1 非侧边栏展示
 */

export default [{
  id: 'util',
  title: '实用工具',
  icon: 'tool',
  route: '/util',
  type: 0,
}, {
  id: 'components',
  pid: '',
  title: '组件列表',
  icon: 'appstore-o',
  route: '',
  type: 0,
}, {
  id: 'components.image',
  pid: 'components',
  title: 'Image',
  route: '/component/image',
  type: 0,
}, {
  id: 'components.imageViewer',
  pid: 'components',
  title: 'ImageViewer',
  route: '/component/imageViewer',
  type: 0,
}, {
  id: 'components.detailPanel',
  pid: 'components',
  title: 'DetailPanel',
  route: '/component/detailPanel',
  type: 0,
}, {
  id: 'components.player',
  pid: 'components',
  title: 'Player',
  route: '/component/player',
  type: 0,
}, {
  id: 'advertisement',
  pid: '',
  title: '广告管理',
  icon: 'shop',
  route: '/advertisement',
  type: 0,
}, {
  id: 'advertisement.banner',
  pid: 'advertisement',
  title: 'Banner广告',
  icon: '',
  route: '/advertisement/banner',
  type: 0,
}, {
  id: 'advertisement.feed',
  pid: 'advertisement',
  title: 'Feed流广告',
  icon: '',
  route: '/advertisement/feed',
  type: 0,
}, {
  id: 'advertisement.startup',
  pid: 'advertisement',
  title: '开机广告',
  icon: '',
  route: '/advertisement/startup',
  type: 0,
}, {
  id: 'live',
  pid: '',
  title: '直播监控',
  icon: 'video-camera',
  route: '',
  type: 0,
}, {
  id: 'user',
  pid: '',
  title: '用户管理',
  icon: 'user',
  route: '/user',
  type: 0,
}, {
  id: 'user.account',
  pid: 'user',
  title: '账号管理',
  icon: '',
  route: '/user/account',
  type: 0,
}, {
  id: 'user.account.register',
  pid: 'user.account',
  title: '注册账号',
  icon: '',
  route: '/user/account/register',
  type: 0,
}, {
  id: 'user.account.list',
  pid: 'user.account',
  title: '账号列表',
  icon: '',
  route: '/user/account/list',
  type: 0,
}, {
  id: 'user.role',
  pid: 'user',
  title: '角色管理',
  icon: '',
  route: '/user/role',
  type: 0,
}, {
  id: 'user.role.create',
  pid: 'user.role',
  title: '创建角色',
  icon: '',
  route: '/user/role/create',
  type: 0,
}, {
  id: 'user.role.list',
  pid: 'user.role',
  title: '角色列表',
  icon: '',
  route: '/user/role/list',
  type: 0,
}, {
  id: 'user.setting',
  pid: 'user',
  title: '用户设置',
  icon: '',
  route: '/user/setting',
  type: 1,
}, {
  id: 'version',
  pid: '',
  title: '版本发布',
  icon: 'shake',
  route: '',
  type: 0,
}, {
  id: 'version.ios',
  pid: 'version',
  title: 'IOS',
  icon: 'apple',
  route: '',
  type: 0,
}, {
  id: 'version.android',
  pid: 'version',
  title: 'Android',
  icon: 'android',
  route: '/release/android',
  type: 0,
}, {
  id: 'statistics',
  pid: '',
  title: '数据统计',
  icon: 'area-chart',
  route: '/statistics',
  type: 0,
}, {
  id: 'operationLog',
  pid: '',
  title: '操作日志',
  icon: 'book',
  route: '/operationLog',
  type: 0,
}];