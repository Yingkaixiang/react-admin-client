export default {
  namespace: 'advertisementStartup',
  state: {
    thumbUrl: '',
  },
  effects: {},
  reducers: {
    setThumbUrl(state, { payload }) {
      return { ...state, thumbUrl: payload };
    },
  },
};
