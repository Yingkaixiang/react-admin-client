import React from 'react';
import { Steps, Tree } from 'antd';
import styles from './index.less';

const Step = Steps.Step;

function Create() {
  return (
    <div className={styles.main}>
      <Steps current={0}>
        <Step title="填写信息" />
        <Step title="选择权限" />
        <Step title="创建完成" />
      </Steps>
    </div>
  );
}

export default Create;
