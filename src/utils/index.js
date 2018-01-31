import { cloneDeep } from 'lodash';
import permission from '../config/permission';

// 数组转树
export function arrayToTree(arr) {
  const current = cloneDeep(arr);
  const hash = {};
  const result = [];
  current.forEach(item => hash[item.id] = item);
  current.forEach(item => {
    const parent = hash[item.pid];
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(item);
    } else {
      result.push(item)
    }
  });
  return result;
}

// 获取权限id
export function getPermissionId(route) {
  for (let i = 0; i < permission.length; i += 1) {
    const data = permission[i];
    if (data.route === route) {
      return data.id
    }
  }
}

// 通过id获取当前权限的层级
export function getPermissionParent(id) {
  if (id) {
    const current = id.split('.');
    const tmp = [];
    const arr = [];
    for (let i = 0; i < current.length; i += 1) {
      tmp.push(current[i]);
      arr.push(tmp.join('.'));
    }
    return arr;
  } else {
    return [id];
  }
}