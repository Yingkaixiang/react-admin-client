/**
 * 图片
 * @param {string} src 图片地址
 * @param {string} className 类名
 * @param {function} onClick 点击事件
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';
import config from '../../config/base';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
    }
  }

  onError() {
    this.setState({
      src: `${config.qiniuHost}/image_error.png`,
    });
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick(this.state.src);
    }
  }

  render() {
    return (
      <div>
        <img
          className={this.props.className}
          src={this.state.src}
          alt="图片"
          onError={this.onError.bind(this)}
          onClick={this.onClick.bind(this)}
        />
      </div>
    )
  }
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  onClick: propTypes.func,
  className: propTypes.string,
}

export default Image;