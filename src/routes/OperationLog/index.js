/**
 * 操作日志
 */

import React from 'react';
import { Table, Avatar } from 'antd';
import { connect } from 'dva';

function OperationLog({ dataSource, dispatch }) {
  // 显示头像
  function showAvatar(url) {
    dispatch({
      type: 'imageViewer/open',
      payload: { imageUrls: [url] },
    });
  }

  // 显示用户信息
  function showUserInfo() {
    dispatch({
      type: 'detailPanel/open',
    });
  }

  const columns = [{
    title: '头像',
    dataIndex: 'avatar',
    render: (avatar, record) => {
      return (
        <Avatar
          size="large"
          src={avatar}
          onClick={() => {showAvatar(avatar)}}
        >{record.operator}</Avatar>);
    }
  }, {
    title: '操作人',
    dataIndex: 'operator',
    render: (operator) => {
      return (<a onClick={showUserInfo}>{operator}</a>);
    }
  }, {
    title: '操作时间',
    dataIndex: 'createAt',
  }, {
    title: '操作类型',
    dataIndex: 'operationType',
  }, {
    title: '操作用时',
    dataIndex: 'operationTime',
  }, {
    title: '备注',
    dataIndex: 'desc',
  }];

  return (
    <Table
      rowKey={record => record.id}
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 20,
      }}
    />
  )
}

export default connect(data => data.operationLog)(OperationLog);

