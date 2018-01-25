import React from 'react';
import styles from '../index.less';

function ImageViewerDoc() {
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
        </ul>
      </div>
      <div className={styles.container}>
        <h2>代码演示</h2>
      </div>
    </div>
  );
}

export default ImageViewerDoc;
