import React from 'react';
import { withRouter } from 'dva/router';
import {
  Layout,
  BackTop,
  LocaleProvider,
  notification,
} from 'antd';
import { connect } from 'dva';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import styles from './App.less';

import ImageViewer from '../components/ImageViewer/';
import DetailPanel from '../components/DetailPanel/';
import SiderMenu from '../components/SiderMenu/';
import HeaderNav from '../components/HeaderNav/';

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
          <Header style={{ padding: 0 }}>
            <HeaderNav />
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
