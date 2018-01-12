import React from 'react';
import { Button } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

function PageNotFound() {
  return (
    <div className={styles.main}>
      <img
        className={styles.img}
        src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt="404"
      />
      <div className={styles.right}>
        <h1>404</h1>
        <p>抱歉，你访问的页面不存在</p>
        <Link to="/">
          <Button type="primary">返回首页</Button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound;
