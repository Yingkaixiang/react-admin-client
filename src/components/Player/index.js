/**
 * 多媒体播放器
 */

import React from 'react';
import { connect } from 'dva';
import { Alert } from 'antd';
import styles from './index.less';

function Player({ visible, url, dispatch, isError }) {
  // 隐藏播放器
  function hide(e) {
    dispatch({ type: 'player/hide' });
  }

  // 播放器属性
  const playerProps = {
    autoPlay: true,
    controls: true,
    loop: true,
    preload: 'metadata',
    onError: (error) => {
      dispatch({ type: 'player/onError' });
    },
  }

  function initPlayer(url) {
    if (isError || !url) {
      return (
        <Alert
          message={`当前资源无法播放，请检查 ${url} 地址是否正确。`}
          type="error"
          showIcon
        />
      )
    }

    if (url.indexOf('.mp3') !== -1) {
      return (<audio src={url} {...playerProps}></audio>);
    } else {
      return (<video src={url} {...playerProps}></video>);
    }
  }

  return (
    <div>
      <div
        className={styles.cover}
        style={{ display: visible ? 'block' : 'none' }}
      ></div>
      <div
        className={styles.wrapper}
        onClick={hide}
        style={{ display: visible ? 'flex' : 'none' }}
      >
        <div
          className={styles.modal}
          onClick={e => {e.stopPropagation();}}
        >
          {initPlayer(url)}
        </div>
      </div>
    </div>
  );
}

export default connect(data => data.player)(Player);
