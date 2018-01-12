import React from 'react';
import {
  Layout,
  Badge,
  Icon,
  BackTop,
  Menu,
  LocaleProvider,
  notification,
} from 'antd';
import { connect } from 'dva';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import styles from './App.less';

import ImageViewer from '../components/ImageViewer/';
import DetailPanel from '../components/DetailPanel/';
import SiderMenu from '../components/SiderMenu/';

const {
  Sider,
  Header,
  Content,
  Footer,
} = Layout;

const SubMenu = Menu.SubMenu;

// 模拟消息
setInterval(() => {
  notification.open({
    message: '后台消息通知',
    description: '您有一条新的消息，请及时查看',
    placement: 'bottomRight',
  })
}, 10000);

function App({ children, dispatch, collapsed }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Layout className={styles.layout}>
        <ImageViewer />
        <DetailPanel />
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width={240}
        >
          <SiderMenu />
        </Sider>
        <Layout>
          <BackTop className={styles.backup} />
          <Header className={styles.header}>
            <div className={styles['header-main']}>
            </div>
            <div className={styles.icon}>
              <Badge dot>
                <Icon type="mail" />
              </Badge>
            </div>
            <Menu mode="horizontal" style={{ borderBottom: 0 }}>
              <SubMenu title={<span><Icon type="user" />应开翔</span>}>
                <Menu.Item key="option">
                  <Icon type="setting" />设置
                </Menu.Item>
                <Menu.Item key="password">
                  <Icon type="lock" />修改密码
                </Menu.Item>
                <Menu.Item key="logout">
                  <Icon type="logout" />注销
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content className={styles.content}>
            <div className={styles.main}>
              {children}
            </div>
          </Content>
          <Footer className={styles.footer}>©2018 Created by Yingkaixiang</Footer>
        </Layout>
      </Layout>
    </LocaleProvider>
  );
}

App.propTypes = {};

export default connect(data => data.app)(App);
