export default {
  namespace: 'playerDoc',
  state: {
    visible: false,
    url: '',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log(history);
    },
  },
  effects: {},
  reducers: {
    showPlayer(state, { payload }) {
      return {
        ...state,
        visible: true,
        url: payload,
      };
    },
    hidePlayer(state) {
      return {
        ...state,
        visible: false,
        url: '',
      };
    },
  },
};
