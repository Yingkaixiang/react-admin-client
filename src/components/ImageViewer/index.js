import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './index.less';

function ImageViewer({ imageUrls, visible, current, dispatch }) {
  const length = imageUrls.length;

  // 上一页
  function prev(current) {
    if (current < 1) return;
    dispatch({
      type: 'imageViewer/onChange',
      payload: current - 1,
    })
  }

  // 下一页
  function next(current) {
    if (current > length - 2) return;
    dispatch({
      type: 'imageViewer/onChange',
      payload: current + 1,
    })
  }

  // 关闭
  function close() {
    dispatch({ type: 'imageViewer/hide' });
  }

  // 获取原图
  function getOrigin(url) {
    return url.split('?')[0]
  }

  return (
    <div className={styles.main} style={{ display: visible ? 'flex' : 'none' }}>
      <Icon
        type="close"
        className={styles.close}
        onClick={close}
      />
      <div className={styles.pagination}>{`${current + 1}/${length}`}</div>
      <div className={styles.btn}>
        <Icon
          type="left"
          className={styles['btn-icon']}
          onClick={() => {prev(current)}}
        />
      </div>
      <div className={styles.container}>
        { imageUrls.map((item, index) => (
          <img
            src={getOrigin(item)}
            alt={index}
            key={index}
            style={{ display: current === index ? 'block' : 'none' }}
          />
        )) }
      </div>
      <div className={styles.btn}>
        <Icon
          type="right"
          className={styles['btn-icon']}
          onClick={() => {next(current)}}
        />
      </div>
    </div>
  )
}

export default connect(data => data.imageViewer)(ImageViewer);