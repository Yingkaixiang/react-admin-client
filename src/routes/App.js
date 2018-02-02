import React from 'react';
import { withRouter, Link } from 'dva/router';
import {
  Layout,
  BackTop,
  LocaleProvider,
  notification,
  Breadcrumb,
} from 'antd';
import { connect } from 'dva';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import styles from './App.less';

import ImageViewer from '../components/ImageViewer/';
import DetailPanel from '../components/DetailPanel/';
import Player from '../components/Player/';
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
    description: (
      <div>
        <p className={styles.notification}>您如果有任何的意见都可以通过以下方式联系我。</p>
        <p className={styles.notification}>邮箱：
          <a href="mailto:rubykaikai@gmail.com">rubykaikai@gmail.com</a>。
        </p>
        <p className={styles.notification}>GitHub：
          <a
            href="https://github.com/Yingkaixiang"
            target="_blank"
            rel="noopener noreferrer"
          >https://github.com/Yingkaixiang</a>。
        </p>
      </div>
    ),
    placement: 'bottomRight',
  })
}, 30000);

function App({ children, dispatch, collapsed, breadcrumb }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Layout className={styles.layout}>
        <ImageViewer />
        <DetailPanel />
        <Player />
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
            <Breadcrumb style={{ marginBottom: 8 }}>
              <Breadcrumb.Item>
                <Link to="/">首页</Link>
              </Breadcrumb.Item>
              {
                breadcrumb.map((item, index) => (
                  <Breadcrumb.Item key={index}>
                    <Link to={item.route}>{item.title}</Link>
                  </Breadcrumb.Item>
                ))
              }
            </Breadcrumb>
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
