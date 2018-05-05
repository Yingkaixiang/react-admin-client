import { spiderMusic } from '../../services/util';

export default {
  namespace: 'util',
  state: {
    current: 0,
    loading: false,
    url: '',
    mp3: '',
  },
  effects: {
    *analyze({ payload }, { call, put }) {
      yield put({ type: 'startLoading' });
      const { data } = yield call(spiderMusic, payload);
      yield put({
        type: 'analyzeSuccess',
        payload: data.url,
      });
    }
  },
  reducers: {
    startLoading(state) {
      return { ...state, loading: true };
    },
    next(state) {
      return { ...state, current: state.current + 1 };
    },
    getUrl(state, { payload }) {
      return { ...state, url: payload };
    },
    analyzeSuccess(state, { payload }) {
      return { ...state, mp3: payload, loading: false, current: 2 };
    }
  }
}