import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CodeMirror from 'react-codemirror';
import styles from '../index.less';
import CodeBox from '../CodeBox/';
import Image from '../../../components/Image/';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

function ImageDoc({ dispatch }) {
  // 预览图片
  function preview(url) {
    dispatch({
      type: 'imageViewer/open',
      payload: { imageUrls: [url] },
    });
  }

  const demo = (
    <Image
      src="http://7xpdcb.com1.z0.glb.clouddn.com/banner/160e05b1c1830eba?imageView2/0/w/400/q/70"
      className={styles.img1}
      onClick={preview}
    />
  );

  const demo1 = (
    <Image
      src=""
      className={styles['img-error']}
    />
  );

  const meta = (
    <div>可以使用自定义样式，点击后使用 <Link to="/component/imageViewer">ImageViewer</Link> 进行预览。</div>
  );

  const meta1 = (
    <div>图片加载失败时会用默认图片进行替换。</div>
  );

  const code = (
    <CodeMirror value="import React from 'react';" />
  )

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.markdown}>Image 图片控件</h1>
        <p>用于图片的显示。</p>
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
        <CodeBox
          demo={demo}
          title="加载一张图片"
          meta={meta}
          code={code}
        />
        <CodeBox demo={demo1} title="图片加载失败" meta={meta1} />
      </div>
    </div>
  );
}

export default connect()(ImageDoc);