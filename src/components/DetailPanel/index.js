import React from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

function DetailPanel({ visible, dispatch }) {
  // 关闭
  function close() {
    dispatch({ type: 'detailPanel/hide' });
  }
  return (
    <div
      className={styles.main}
      style={ visible ? { right: 0 } : {}}
    >
      <div className={styles.header}>
        <div
          className={styles.back}
          onClick={close}
        >
          <Icon type="right" />
        </div>
      </div>
    </div>
  )
}

export default connect(data => data.detailPanel)(DetailPanel);
