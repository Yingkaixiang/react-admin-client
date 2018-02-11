import {
  getOperationLogList,
} from "../../services/operationLog";

export default {
  namespace: 'operationLog',
  state: {
    dataSource: [],
    percent: 0,
    loading: false,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/operationLog') {
          dispatch({ type: 'getOperationLogList' });
        }
      });
    },
  },
  effects: {
    *getOperationLogList({ payload }, { call, put }) {
      const { data } = yield call(getOperationLogList);
      yield put({
        type: 'getOperationLogListSuccess',
        payload: data,
      });
    },
    *exportLog({ payload }, { select, put }) {
      const sleep = ms => new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          resolve();
          clearTimeout(timer);
        }, ms);
      });
      const data = yield select();
      let curPercent = data.operationLog.percent;
      while (curPercent < 100) {
        yield sleep(1000);
        curPercent = curPercent + 10;
        yield put({
          type: 'setPercent',
          payload: curPercent,
        });
      }
      yield sleep(1000);
      yield put({ type: 'cancelExport' });
    },
  },
  reducers: {
    getOperationLogListSuccess(state, { payload }) {
      return { ...state, dataSource: payload };
    },
    setPercent(state,{ payload }) {
      return { ...state, percent: payload, loading: true };
    },
    cancelExport(state) {
      return { ...state, percent: 0, loading: false };
    }
  },
};