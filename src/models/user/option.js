import { cloneDeep } from 'lodash';

export default {
  namespace: 'userOption',
  state: {
    onList: [1, 2, 3, 4, 5],
    offList: [6, 7, 8, 9, 10],
  },
  effects: {},
  reducers: {
    // 上架
    on(state, { payload }) {
      const curOnList = cloneDeep(state.onList);
      const curOffList = cloneDeep(state.offList);
      const item = curOnList.splice(payload, 1);
      curOffList.unshift(item);
      return {
        ...state,
        onList: curOnList,
        offList: curOffList,
      }
    }
  },
}