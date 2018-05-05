import request from '../utils/request';

// 导出操作列表
export async function spiderMusic(data) {
  return request('/api/util/spider/music', {
    method: 'POST',
    data,
  });
}
