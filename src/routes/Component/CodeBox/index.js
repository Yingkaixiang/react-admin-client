import React from 'react';
import propTypes from 'prop-types';
import styles from '../index.less';

function CodeBox({ demo, title, meta }) {
  return (
    <div className={styles['code-box']}>
      <div className={styles['code-box-demo']}>
        {demo}
      </div>
      <div className={styles['code-box-meta']}>
        <div className={styles['code-box-title']}>{title}</div>
        {meta}
      </div>
    </div>
  )
}

CodeBox.propTypes = {
  demo: propTypes.element,
  title: propTypes.element,
  meta: propTypes.element,
}

export default CodeBox;