/**
 * 操作日志
 */

import React from 'react';
import { Table, Avatar, Button, Card } from 'antd';
import { connect } from 'dva';
import parser from 'ua-parser-js';

function OperationLog({ dataSource, dispatch }) {
  const ua = parser(navigator.userAgent);
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
    width: 56,
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

  const columns_m = [{
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
  }];

  // 导出日志
  function exportLog() {
    alert(13);
  }

  return (
    <div>
      {
        ua.device.type === 'mobile' ? (
          <Table columns={columns_m} dataSource={dataSource} />
        ) : (
          <div>
            <Card style={{ marginBottom: 16 }}>
              <Button
                icon="export"
                type="primary"
                onClick={exportLog}
              >导出</Button>
            </Card>
            <Table
              rowKey={record => record.id}
              bordered
              columns={columns}
              dataSource={dataSource}
              pagination={{
                pageSize: 20,
              }}
            />
          </div>
        )
      }
    </div>
  )
}

export default connect(data => data.operationLog)(OperationLog);

