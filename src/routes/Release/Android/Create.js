/**
 * 创建一个版本发布计划
 */

import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

function Create() {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  };

  return (
    <Modal
      title="发布版本"
      visible={false}
    >
      <Form>
        <FormItem
          label="版本号"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
      </Form>
    </Modal>
  )
}

export default Form.create()(Create);
