/**
 * 头部
 */

import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Popover, Badge, Icon } from 'antd';
import styles from './index.less';

function Header({ dispatch }) {
  const content = (
    <div>
      <div
        className={styles['user-item']}
        onClick={() => {dispatch(routerRedux.push('/user/setting'))}}
      >
        <Icon type="setting" />
        <span>用户设置</span>
      </div>
      <div className={styles['user-item']}>
        <Icon type="lock" />
        <span>密码修改</span>
      </div>
      <div className={styles['user-item']}>
        <Icon type="logout" />
        <span>注销</span>
      </div>
    </div>
  );
  return (
    <div className={styles.header}>
      <div className={styles['header-main']}>
      </div>
      <div className={styles.icon}>
        <Badge dot>
          <Icon type="mail" />
        </Badge>
      </div>
      <Popover
        placement="bottomRight"
        content={content}
        trigger="hover"
      >
        <div className={styles.user}>
          <Icon type="user" />
          <span>应开翔</span>
        </div>
      </Popover>
    </div>
  )
}

export default connect()(Header);