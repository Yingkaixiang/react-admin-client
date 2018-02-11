import React from 'react';
import { Button, Table, Anchor } from 'antd';
import { connect } from 'dva';
import Player from '../../../components/Player/';
import CodeBox from '../CodeBox/';
import styles from '../index.less';

const { Link } = Anchor;
const videoUrl = 'https://wsqncdn.miaopai.com/stream/Sk0rROF69k4fImT82ArrHzRaoTw49JUyd9nB4g___16_0_1517375502.mp4?ssig=0bd7057faecf47fffc49ea3075d45f90&time_stamp=1518258661656';
const audioUrl = 'http://lzscuw.changba.com/815676430.mp3';

function PlayerDoc({ dispatch, visible, url }) {
  const meta = (<div>播放器根据视频本身大小自适应并自动播放。</div>);

  const meta1 = (<div>自动播放音频</div>);

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

  const columns = [{
    title: '成员',
    dataIndex: 'members',
  }, {
    title: '说明',
    dataIndex: 'desc',
  }, {
    title: '类型',
    dataIndex: 'type',
  }, {
    title: '默认值',
    dataIndex: 'default',
  }];

  const dataSource = [{
    id: 1,
    members: 'url',
    desc: '多媒体资源地址',
    type: 'string',
    default: '\'\'',
  }, {
    id: 2,
    members: 'visible',
    desc: '播放器是否可见',
    type: 'boolean',
    default: 'false',
  }, {
    id: 3,
    members: 'onCancel',
    desc: '点击遮罩层',
    type: 'function()',
    default: '无',
  }];

  return (
    <div>
      <div style={{
        width: 200,
        position: 'absolute',
        right: 32,
        top: 32,
      }}>
        <Anchor showInkInFixed>
          <Link href="#video-play" title="视频播放" />
          <Link href="#audio-play" title="音频播放" />
          <Link href="#error" title="资源播放失败" />
          <Link href="#player-list" title="多个播放器实例" />
          <Link href="#API" title="API" />
        </Anchor>
      </div>
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
        <a name="video-play"></a>
        <CodeBox
          title="视频播放"
          meta={meta}
        >
          <Button onClick={() => {showPlayer(videoUrl)}}>视频播放</Button>
        </CodeBox>
        <a name="audio-play"></a>
        <CodeBox
          title="音频播放"
          meta={meta1}
        >
          <Button onClick={() => {showPlayer(audioUrl)}}>音频播放</Button>
        </CodeBox>
        <a name="error"></a>
        <CodeBox
          title="资源播放失败"
          meta={meta2}
        >
          <Button onClick={() => {showPlayer('test')}}>播放</Button>
        </CodeBox>
        <a name="player-list"></a>
        <CodeBox
          title="多个播放器实例"
          meta="单个页面可以展示多个播放器实例，并独立控制各自的状态。"
        >
          <div style={{
            width: '100%',
            height: 500,
          }}>播放器列表</div>
        </CodeBox>
      </div>
      <a name="API"></a>
      <div className={styles.container}>
        <h1 className={styles.markdown}>API</h1>
        <p>Player Props</p>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
        />
      </div>
    </div>
  );
}

export default connect(data => data.playerDoc)(PlayerDoc);
