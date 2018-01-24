import React from 'react';
import { Link, Card } from 'dva/router';
import CodeMirror from 'react-codemirror';
import styles from '../index.less';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

function Image() {
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
        <CodeMirror
          value="import Image from '../../components/Image/';"
          options={{ mode: 'javascript' }}
        />
      </div>
    </div>
  );
}

export default Image;