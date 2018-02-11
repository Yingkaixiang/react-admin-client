import React from 'react';
import { connect } from 'dva';
import styles from '../index.less';
import CodeBox from '../CodeBox/';

function ImageViewerDoc({ dispatch }) {
  const imgList = [
    'https://coding.net/static/project_icon/scenery-14.png',
    'https://coding.net/static/project_icon/scenery-13.png',
    'https://coding.net/static/project_icon/scenery-12.png',
    'https://coding.net/static/project_icon/scenery-11.png',
    'https://coding.net/static/project_icon/scenery-10.png',
  ];

  function showOrigin(index) {
    dispatch({
      type: 'imageViewer/open',
      payload: {
        imageUrls: imgList,
        initialIndex: index,
      },
    });
  }

  const meta = (
    <div>显示指定图片，可以直接在参数中配置。</div>
  );

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.markdown}>ImageViewer 图片预览控件</h1>
        <p>用于预览单张或多张图片的原图。</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.markdown}>默认功能</h2>
        <ul>
          <li>
            <p>图片加载失败时会用统一默认图片进行替换。</p>
          </li>
          <li>
            <p>可以指定默认显示图片。</p>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2>代码演示</h2>
        <CodeBox
          title="显示指定图片"
          meta={meta}
        >
          <div className={styles['img-list']}>
            { imgList.map((item, index) => (
                <img
                  alt="图片"
                  src={item}
                  key={index}
                  onClick={() => {showOrigin(index);}} />)
                )
              }
          </div>
        </CodeBox>
      </div>
    </div>
  );
}

export default connect()(ImageViewerDoc);
