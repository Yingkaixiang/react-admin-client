export default {
  namespace: 'app',
  state: {
    collapsed: false,
    openKeys: [],
  },
  effects: {},
  reducers: {
    toggle(state, { payload }) {
      return { ...state, collapsed: payload }
    },
    handleMenu(state, { payload }) {
      return { ...state, openKeys: payload }
    }
  },
}