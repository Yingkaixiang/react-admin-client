import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import CodeBox from '../CodeBox/';
import styles from '../index.less';

function PlayerDoc({ dispatch }) {
  const demo = (
    <Button onClick={() => {showPlayer('https://relamov.rela.me/gyx.mp4')}}>视频播放</Button>
  );
  const meta = (<div>播放器根据视频本身大小自适应并自动播放。</div>);

  const demo1 = (
    <Button onClick={() => {showPlayer('http://qiniuuwmp3.changba.com/1020584082.mp3')}}>音频播放</Button>
  );
  const meta1 = (<div>自动播放音频</div>);

  const demo2 = (
    <Button onClick={() => {showPlayer('test')}}>播放</Button>
  );
  const meta2 = (<div>资源地址为空或者无法播放时都会使用默认错误样式提示。</div>);

  function showPlayer(url) {
    dispatch({
      type: 'player/open',
      payload: { url }
    });
  }

  return (
    <div>
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

export default connect()(PlayerDoc);
