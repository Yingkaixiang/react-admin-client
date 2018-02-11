import request from '../utils/request';

// 获取操作日志列表
export async function getOperationLogList() {
  return request('/api/operationLog/list');
}

// 导出操作列表
export async function exportOperationLog() {
  return request('/api/operationLog/export', {
    method: 'POST',
  });
}
