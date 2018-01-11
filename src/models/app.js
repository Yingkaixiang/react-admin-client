export default {
  namespace: 'app',
  state: {
    collapsed: false,
  },
  effects: {},
  reducers: {
    toggle(state, { payload }) {
      return { ...state, collapsed: payload }
    }
  },
}