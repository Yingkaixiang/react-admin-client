import mockjs from 'mockjs';

export default {
  'GET /api/operationLog/list': (req, res) => {
    const { list } = mockjs.mock({
      'list|100': [{
        'id|+1': 1,
        'avatar': '',
        'operator': '@cname',
        'createAt': '@datetime',
        'operationType|1': ['禁用账号', '解禁账号'],
        'operationTime': '5秒',
        'desc': '@csentence'
      }],
    });
    res.json(list);
  },

  'POST /api/operationLog/export': (req, res) => {
    res.json({ status: 1 });
  },
};
