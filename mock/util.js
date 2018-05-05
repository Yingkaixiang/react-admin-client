export default {
  'POST /api/util/spider/music': (req, res) => {
    setTimeout(() => {
      res.json({ url: 'http://qiniuuwmp3.changba.com/1057300674.mp3' });
    }, 2000);
  }
};
