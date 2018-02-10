import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Alert } from 'antd';
import styles from './index.less';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  initPlayer(url) {
    // 播放器属性
    const playerProps = {
      autoPlay: true,
      controls: true,
      loop: true,
      preload: 'metadata',
      onError: (error) => {
        this.setState({ isError: true });
      },
    }

    if (this.state.isError || !url) {
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

  render() {
    const { visible, url, onCancel } = this.props;
    return (
      <div>
        <div
          className={styles.cover}
          style={{ display: visible ? 'block' : 'none' }}
        ></div>
        <div
          className={styles.wrapper}
          onClick={onCancel}
          style={{ display: visible ? 'flex' : 'none' }}
        >
          <div
            className={styles.modal}
            onClick={e => {e.stopPropagation();}}
          >
            {this.initPlayer(url)}
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  visible: propTypes.bool,
  url: propTypes.string,
  onCancel: propTypes.func,
}

export default Player;
