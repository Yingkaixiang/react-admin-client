import React, { Component } from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';
import styles from '../index.less';

class CodeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  showCode() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { demo, title, meta, code } = this.props;
    return (
      <div className={styles['code-box']}>
        <div className={styles['code-box-demo']}>
          {demo}
        </div>
        <div className={styles['code-box-meta']}>
          <div className={styles['code-box-title']}>{title}</div>
          {meta}
          <div className={styles['code-box-meta-btn']}>
            <Icon
              type={this.state.visible ? 'up' : 'down'}
              onClick={this.showCode.bind(this)}
            />
          </div>
        </div>
        <div
          className={styles['code-box-code']}
          style={{ display: this.state.visible ? 'block' : 'none' }}
        >
          {code || null}
        </div>
      </div>
    )
  }
}

CodeBox.propTypes = {
  demo: propTypes.element,
  title: propTypes.element,
  meta: propTypes.element,
}

export default CodeBox;