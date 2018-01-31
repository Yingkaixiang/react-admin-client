/**
 * 权限列表
 * @param {number} type 权限类型
 * 0 在侧边栏中展示
 * 1 非侧边栏展示
 */

export default [{
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
  id: 'user.role',
  pid: 'user',
  title: '角色管理',
  icon: '',
  route: '/user/role',
  type: 0,
}, {
  id: 'user.setting',
  pid: 'user',
  title: '用户设置',
  icon: '',
  route: '/user/setting',
  type: 1,
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