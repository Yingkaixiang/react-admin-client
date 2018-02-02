/**
 * 安卓发版
 * 通常需要在官方网站或一些第三方渠道进行安装包的发布
 */

import React from 'react';
import { Table, Button, Icon, Modal } from 'antd';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import Create from './Create';

function Android() {
  const columns = [{
    title: '版本号',
    dataIndex: 'version',
  }, {
    title: '下载地址',
    dataIndex: 'url',
  }, {
    title: '大小',
    dataIndex: 'size',
  }, {
    title: '发布时间',
    dataIndex: 'createTime',
  }, {
    title: '修改时间',
    dataIndex: 'updateTime'
  }, {
    title: '更新文案',
    dataIndex: 'desc',
  }];

  const editorProps = {
    controls: [
      'undo', 'redo', 'split', 'font-size', 'font-family',
      'bold', 'italic', 'underline', 'strike-through', 'superscript',
      'subscript', 'text-align', 'split', 'headings', 'list_ul', 'list_ol',
      'blockquote', 'code', 'split', 'link',
    ]
  }

  return (
    <div>
      <Create />
      <Button type="primary" style={{ marginBottom: 16 }}>
        <Icon type="plus" />发布版本
      </Button>
      <Table columns={columns} />
      <BraftEditor {...editorProps} />  
    </div>
  );
}

export default Android;