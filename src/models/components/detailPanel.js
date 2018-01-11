export default {
  namespace: 'detailPanel',
  state: {
    visible: false,
  },
  effects: {},
  reducers: {
    open(state) {
      return { ...state, visible: true };
    },
    hide(state) {
      return { ...state, visible: false };
    }
  },
}