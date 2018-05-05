import { cloneDeep } from 'lodash';
import { getSetting } from '../../services/user';

export default {
  namespace: 'userOption',
  state: {
    enableLoading: true,
    disableLoading: true,
    enableList: [{
      title: '订单数量',
      desc: '查看当前时间内产品总的订单总数',
      id: '4',
    }, {
      title: '热门搜索',
      desc: '查看当前产品关键词搜索的排行榜',
      id: '5',
    }],
    disableList: [{
      title: '天气',
      desc: '查看当前城市当天的天气',
      id: '1',
    }, {
      title: 'CPU',
      desc: '当前服务器状态查看',
      id: '2',
    }, {
      title: '今日访问量',
      desc: '产品截止到目前为止的用户访问量统计',
      id: '3'
    }],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/user/setting') {
          dispatch({ type: 'getSetting' });
        }
      });
    },
  },
  effects: {
    // 获取设置
    *getSetting({ payload }, { call, put }) {
      const { data } = yield call(getSetting);
      yield put({
        type: 'getSettingSuccess',
        payload: data,
      })
    }
  },
  reducers: {
    // 获取设置成功
    getSettingSuccess(state, { payload }) {
      const { enableList, disableList } = payload;
      return { ...state, disableList, enableList };
    },
    // 交互位置
    exchangePos(state, { payload }) {
      const { dragIndex, hoverIndex, type } = payload;
      const current = type === 'enable' ? state.enableList : state.disableList;
      const list = cloneDeep(current);
      const dragItem = list.splice(dragIndex, 1);
      list.splice(hoverIndex, 0, dragItem[0]);
      if (type === 'enable') {
        return { ...state, enableList: list };
      } else {
        return { ...state, disableList: list };
      }
    }
  },
}