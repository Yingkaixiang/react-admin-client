/**
 * 开机广告
 */

import React from 'react';
import { Button, Icon, Upload, Modal } from 'antd';
import { connect } from 'dva';
import iphone from '../../assets/iphone.png';
import styles from './index.less';

function Startup({ dispatch, thumbUrl }) {
  const uploadProps = {
    beforeUpload: (file) => {
      const imageTypeReg = /^image\//;
      if (!imageTypeReg.test(file.type)) {
        Modal.error({
          title: '图片格式错误',
          content: '开机广告只支持图片格式',
        });
        return;
      }
    },
    showUploadList: false,
    customRequest: ({ file }) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatch({
          type: 'advertisementStartup/setThumbUrl',
          payload: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className={styles.startup}>
      <Upload {...uploadProps}>
        <Button type="primary">
          <Icon type="upload" /> 上传图片
        </Button>
      </Upload>
      <div className={styles.iphone}>
        <div className={styles.pic}>
          {
            thumbUrl ? (<img src={thumbUrl} alt="缩略图" />) : null
          }
        </div>
        <img src={iphone} alt="手机" />
      </div>
    </div>
  );
}

export default connect(data => data.advertisementStartup)(Startup);
