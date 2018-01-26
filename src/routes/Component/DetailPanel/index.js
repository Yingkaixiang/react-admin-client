import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import styles from '../index.less';
import CodeBox from '../CodeBox/';

function DetailPanelDoc({ dispatch }) {
  function showDetail() {
    dispatch({
      type: 'detailPanel/open',
    });
  }

  const demo = (
    <Button onClick={showDetail}>查看详情</Button>
  );

  const meta = (
    <div>点击按钮可以查看详细信息</div>
  )

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.markdown}>DetailPanel 详情面板</h1>
        <p>用于详细信息的展示。</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.markdown}>默认功能</h2>
        <ul>
          <li>
            <p>从右侧滑出并可以自定义任何内容。</p>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2>代码演示</h2>
        <CodeBox
          demo={demo}
          title="显示信息"
          meta={meta}
        />
      </div>
    </div>
  );
}

export default connect()(DetailPanelDoc);