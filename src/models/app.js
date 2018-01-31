import {
  getPermissionId,
  getPermissionParent,
} from '../utils/';

export default {
  namespace: 'app',
  state: {
    collapsed: false,
    openKeys: [],
    selectedKeys: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        // 根据路由变化打开对应的侧边栏模块
        const selectedKeys = getPermissionId(location.pathname);
        const openKeys = getPermissionParent(selectedKeys);
        dispatch({
          type: 'onMenuSelect',
          payload: [selectedKeys],
        });
        dispatch({
          type: 'onMenuOpenChange',
          payload: openKeys,
        });
      });
    },
  },
  effects: {},
  reducers: {
    toggle(state, { payload }) {
      return { ...state, collapsed: payload };
    },
    onMenuOpenChange(state, { payload }) {
      return { ...state, openKeys: payload };
    },
    onMenuSelect(state, { payload }) {
      return { ...state, selectedKeys: payload };
    }
  },
}