import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import Player from '../../../components/Player/';
import CodeBox from '../CodeBox/';
import styles from '../index.less';

const videoUrl = 'https://wsqncdn.miaopai.com/stream/Sk0rROF69k4fImT82ArrHzRaoTw49JUyd9nB4g___16_0_1517375502.mp4?ssig=0bd7057faecf47fffc49ea3075d45f90&time_stamp=1518258661656';
const audioUrl = 'http://lzscuw.changba.com/815676430.mp3';

function PlayerDoc({ dispatch, visible, url }) {
  const demo = (<Button onClick={() => {showPlayer(videoUrl)}}>视频播放</Button>);
  const meta = (<div>播放器根据视频本身大小自适应并自动播放。</div>);

  const demo1 = (<Button onClick={() => {showPlayer(audioUrl)}}>音频播放</Button>);
  const meta1 = (<div>自动播放音频</div>);

  const demo2 = (
    <Button onClick={() => {showPlayer('test')}}>播放</Button>
  );
  const meta2 = (<div>资源地址为空或者无法播放时都会使用默认错误样式提示。</div>);

  function showPlayer(url) {
    dispatch({
      type: 'playerDoc/showPlayer',
      payload: url,
    });
  }
  
  function hidePlayer() {
    dispatch({
      type: 'playerDoc/hidePlayer',
    });
  }

  return (
    <div>
      <Player
        visible={visible}
        url={url}
        onCancel={hidePlayer}
      />
      <div className={styles.container}>
        <h1 className={styles.markdown}>Player 多媒体播放器</h1>
        <p>用于播放多媒体文件。</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.markdown}>默认功能</h2>
        <ul>
          <li>
            <p>视频播放。</p>
          </li>
          <li>
            <p>音频播放。</p>
          </li>
          <li>
            <p>直播观看。</p>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2>代码演示</h2>
        <CodeBox
          demo={demo}
          title="视频播放"
          meta={meta}
        />
        <CodeBox
          demo={demo1}
          title="音频播放"
          meta={meta1}
        />
        <CodeBox
          demo={demo2}
          title="资源播放失败"
          meta={meta2}
        />
      </div>
    </div>
  );
}

export default connect(data => data.playerDoc)(PlayerDoc);
