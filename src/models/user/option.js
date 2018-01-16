import { cloneDeep } from 'lodash';

export default {
  namespace: 'userOption',
  state: {
    disableList: [{
      title: '天气',
      id: '1',
    }, {
      title: 'CPU',
      id: '2',
    }, {
      title: '今日访问量',
      id: '3'
    }],
  },
  effects: {},
  reducers: {
    // 交互位置
    exchangePos(state, { payload }) {
      const { dragIndex, hoverIndex } = payload;
      const list = cloneDeep(state.disableList);
      const dragItem = list.splice(dragIndex, 1);
      list.splice(hoverIndex, 0, dragItem[0]);
      return { ...state, disableList: list };
    }
  },
}