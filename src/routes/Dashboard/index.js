import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import Image from '../../components/Image/';

function Dashboard({ dispatch }) {
    // 数据源
  const data = [
    { genre: 'Sports', sold: 275, income: 2300 },
    { genre: 'Strategy', sold: 115, income: 667 },
    { genre: 'Action', sold: 120, income: 982 },
    { genre: 'Shooter', sold: 350, income: 5271 },
    { genre: 'Other', sold: 150, income: 3710 }
  ];

  // 定义度量
  const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
  };

  function showImageViewer(url) {
    dispatch({
      type: 'imageViewer/open',
      payload: {
        imageUrls: [url]
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
      <Image
        src="http://qncdn.rela.me/src/img/live_apply/banner_cn.png?imageView2/2/"
        type="image"
        onClick={showImageViewer}
      />
      <Image src="123" type="image" />
      <Image src="123" type="image" />
      <Image src="123" type="image" />
      <Image src="123" type="image" />
      <Image src="123" type="image" />
      <Button onClick={showImageViewer} style={{ marginRight: 10 }}>图片预览</Button>
      <Button onClick={showDetailPanel}>详情面板</Button>
      <div style={{ marginTop: 40 }}>
        <Chart width={600} height={400} data={data} scale={cols}>
          <Axis name="genre" />
          <Axis name="sold" />
          <Legend position="top" dy={-20} />
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
      </div>
    </div>
  );
}

export default connect()(Dashboard);
