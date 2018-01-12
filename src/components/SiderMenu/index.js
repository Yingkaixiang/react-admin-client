/**
 * 菜单栏
 */

import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { difference } from 'lodash';
import permission from '../../config/permission';
import { arrayToTree } from '../../utils/';
import styles from './index.less';

const { SubMenu } = Menu;

const tree = arrayToTree(permission)
const createMenu = (tree) => {
  return tree.map(item => {
    if (item.children) {
      return (
        <SubMenu
          key={item.id}
          title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
        >
          { createMenu(item.children) }
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item
          key={item.id}
        >
          <Icon type={item.icon} />{ item.title }
        </Menu.Item>
      );
    }
  });
}

function SiderMenu({ openKeys, dispatch }) {
  function onOpenChange(keys) {
    dispatch({
      type: 'app/handleMenu',
      payload: difference(keys, openKeys),
    });
  }
  return (
    <div>
      <div className={styles.logo}></div>
      <Menu
        mode="inline"
        theme="dark"
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        onSelect={onOpenChange}
      >
        {createMenu(tree)}
      </Menu>
    </div>
  );
}

export default connect(data => data.app)(SiderMenu);
