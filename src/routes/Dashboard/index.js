import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

function Dashboard({ dispatch }) {
  function showImageViewer() {
    dispatch({
      type: 'imageViewer/open',
      payload: {
        imageUrls: [
          'http://qncdn.rela.me/src/img/game/bg3.jpg',
          'http://qncdn.rela.me/src/img/game/czsg-1.jpg',
          'http://qncdn.rela.me/src/img/game/czsg-3.jpg',
          'http://qncdn.rela.me/src/img/game/czsg-4.jpg'
        ]
      }
    })
  }

  function showDetailPanel() {
    dispatch({
      type: 'detailPanel/open',
    })
  }
  return (
    <div>
      <Button onClick={showImageViewer} style={{ marginRight: 10 }}>图片预览</Button>
      <Button onClick={showDetailPanel}>详情面板</Button>
    </div>
  );
}

export default connect()(Dashboard);
