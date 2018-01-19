import mockjs from 'mockjs';

export default {
  'GET /api/user/setting': (req, res) => {
    const data = mockjs.mock({
      'enableList|5': [
        {
          'id|+1': 1,
          title: '@ctitle',
          desc: '@csentence'
        }
      ],
      'disableList|10': [
        {
          'id|+1': 6,
          title: '@ctitle',
          desc: '@csentence'
        }
      ]
    });
    res.json(data);
  }
}