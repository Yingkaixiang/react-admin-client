import React from 'react';
import { Link, withRouter } from 'dva/router';
import {
  Layout,
  Badge,
  Icon,
  BackTop,
  Popover,
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

// 模拟消息
setInterval(() => {
  notification.open({
    message: '后台消息通知',
    description: '您有一条新的消息，请及时查看',
    placement: 'bottomRight',
  })
}, 10000);

function App({ children, dispatch, collapsed }) {
  const content = (
    <div>
      <div className={styles['user-item']}>
        <Link to="/user/setting">
          <Icon type="setting" />
          <span>用户设置</span>
        </Link>
      </div>
      <div className={styles['user-item']}>
        <Icon type="lock" />
        <span>密码修改</span>
      </div>
      <div className={styles['user-item']}>
        <Icon type="logout" />
        <span>注销</span>
      </div>
    </div>
  );
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
            <Popover
              placement="bottomRight"
              content={content}
              trigger="hover"
            >
              <div className={styles.user}>
                <Icon type="user" />
                <span>应开翔</span>
              </div>
            </Popover>
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

export default withRouter(connect(data => data.app)(App));
