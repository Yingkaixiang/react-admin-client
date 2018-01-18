import request from '../utils/request';

// 获取用户配置信息
export async function getSetting() {
  return request('/api/user/setting');
}
