import React from 'react';
import { Steps } from 'antd';

const Step = Steps.Step;

function Register() {
  return (
    <div>
      <Steps current={1}>
        <Step title="填写信息" />
        <Step title="账号验证" />
        <Step title="选择角色" />
        <Step title="注册成功" />
      </Steps>
    </div>
  );
}

export default Register;