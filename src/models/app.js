import {
  getPermissionInfo,
  getPermissionParent,
} from '../utils/';

export default {
  namespace: 'app',
  state: {
    collapsed: false,
    openKeys: [],
    selectedKeys: [],
    breadcrumb: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        // 根据路由变化打开对应的侧边栏模块
        const permission = getPermissionInfo('route', location.pathname);
        // 根路由
        if (!permission) return;
        const selectedKeys = permission.id;
        const openKeys = getPermissionParent(selectedKeys);
        // 当前路由是需要在侧边栏展示的
        if (permission.type === 0) {
          dispatch({
            type: 'onMenuSelect',
            payload: [selectedKeys],
          });
        }
        dispatch({
          type: 'onMenuOpenChange',
          payload: openKeys,
        });
        // 面包屑
        dispatch({
          type: 'setBreadcrumb',
          payload: openKeys.map(item => getPermissionInfo('id', item)),
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
    },
    setBreadcrumb(state, { payload }) {
      return { ...state, breadcrumb: payload };
    }
  },
}