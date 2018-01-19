/**
 * 图片
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
    }
  }

  onError() {
    this.setState({
      src: 'http://static.thel.co/app/avatar/100403874/98e4c520798904e2dbc2c69dad5a3127.jpg-wh150'
    })
  }

  render() {
    return (
      <div>
        <img
          src={this.state.src}
          alt="图片"
          onError={this.onError.bind(this)}
          onClick={() => {this.props.onClick(this.state.src)}}
        />
      </div>
    )
  }
}

Image.propTypes = {
  src: propTypes.string,
  type: propTypes.string,
}

export default Image;