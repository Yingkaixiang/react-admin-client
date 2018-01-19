import { getOperationLogList } from "../../services/operationLog";

export default {
  namespace: 'operationLog',
  state: {
    dataSource: [],
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
  },
  reducers: {
    getOperationLogListSuccess(state, { payload }) {
      return { ...state, dataSource: payload };
    },
  },
};