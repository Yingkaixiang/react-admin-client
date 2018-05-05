import React from 'react';
import { Steps, Button, Input } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const Step = Steps.Step;

function Util({ dispatch, current, loading, url, mp3 }) {
  // 下一步
  function next() {
    dispatch({
      type: 'util/next',
    });
  }

  // 解析地址
  function analyze() {
    dispatch({
      type: 'util/analyze',
      payload: { url },
    });
  }

  // 获取地址
  function getUrl(e) {
    dispatch({
      type: 'util/getUrl',
      payload: e.target.value,
    });
  }

  return (
    <div>
      <Steps current={current}>
        <Step title="获取唱吧链接" />
        <Step title="获取mp3" />
        <Step title="下载到本地" />
      </Steps>
      <div className={`${styles.step} ${current === 0 ? styles.show : styles.hide}`}>
        <img
          className={styles.img}
          src="http://7xpdcb.com1.z0.glb.clouddn.com/admin/util/music/step1.jpg" alt="步骤一"
        />
        <img
          className={styles.img}
          src="http://7xpdcb.com1.z0.glb.clouddn.com/admin/util/music/step2.jpg" alt="步骤二"
        />
        <img
          className={styles.img}
          src="http://7xpdcb.com1.z0.glb.clouddn.com/admin/util/music/step3.jpg" alt="步骤三"
        />
        <Button
          type="primary"
          onClick={next}
        >复制完成</Button>
      </div>
      <div className={`${styles.step} ${current === 1 ? styles.show : styles.hide}`}>
        <Input
          className={styles.input}
          placeholder="请输入唱吧地址"
          onChange={getUrl}
        />
        <Button
          type="primary"
          onClick={analyze}
          loading={loading}
        >开始解析</Button>
      </div>
      <div className={`${styles.step} ${current === 2 ? styles.show : styles.hide}`}>
        <span>复制以下地址到你的下载软件即可：</span>
        <p>{mp3}</p>
      </div>
    </div>
  );
}

export default connect(data => data.util)(Util);
