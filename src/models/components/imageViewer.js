export default {
  namespace: "imageViewer",
  state: {
    visible: false,
    current: 1,
    imageUrls: [],
  },
  effects: {},
  reducers: {
    onChange(state, { payload }) {
      return { ...state, current: payload };
    },
    open(state, { payload }) {
      const { initialIndex, imageUrls } = payload;
      return {
        ...state,
        visible: true,
        current: initialIndex || 0,
        imageUrls,
      };
    },
    hide(state) {
      return { ...state, visible: false };
    }
  },
}