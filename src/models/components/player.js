export default {
  namespace: 'player',
  state: {
    url: '',
    visible: false,
    isError: false,
  },
  effects: {},
  reducers: {
    open(state, { payload }) {
      return {
        ...state,
        visible: true,
        url: payload.url,
      };
    },
    hide(state) {
      return { ...state, visible: false };
    },
    onError(state) {
      return { ...state, isError: true };
    },
  },
};
