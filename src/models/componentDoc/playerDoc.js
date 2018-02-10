export default {
  namespace: 'playerDoc',
  state: {
    visible: false,
    url: '',
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
