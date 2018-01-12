import { cloneDeep } from 'lodash';

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