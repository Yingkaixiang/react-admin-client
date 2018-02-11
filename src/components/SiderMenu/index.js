/**
 * 菜单栏
 * 
 * 1. 根据路由变化自动展开对应菜单
 * 2. 同时只能展开一个菜单选项
 */

import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import permission from '../../config/permission';
import { arrayToTree } from '../../utils/';
import styles from './index.less';

const { SubMenu } = Menu;

const tree = arrayToTree(permission.filter(item => (item.type === 0)));
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
          <Link to={item.route}>
            <Icon type={item.icon} />{ item.title }
          </Link>
        </Menu.Item>
      );
    }
  });
};

function SiderMenu({ openKeys, dispatch, selectedKeys }) {
  // 展开菜单栏
  function onOpenChange(keys) {
    let openKeys = [];
    let father = keys[0];
    for (let i = 0; i < keys.length; i += 1) {
      const data = keys[i];
      if (data) {
        if (data.indexOf(father) !== -1) {
          openKeys.push(data);
        } else {
          openKeys = [data];
        }
      }
    }
    dispatch({
      type: 'app/onMenuOpenChange',
      payload: openKeys,
    });
  }

  // 选中菜单栏
  function onSelect(data) {
    dispatch({
      type: 'app/onMenuSelect',
      payload: data.selectedKeys,
    });
  }

  return (
    <div>
      <div
        className={styles.logo}
        onClick={() => {dispatch(routerRedux.push('/'))}}
      ></div>
      <Menu
        mode="inline"
        theme="dark"
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
      >
        {createMenu(tree)}
      </Menu>
    </div>
  );
}

export default connect(data => data.app)(SiderMenu);
