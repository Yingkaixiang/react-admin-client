import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './App.less';

const {
  Sider,
  Header,
  Content,
  Footer,
} = Layout;

function App() {
  return (
    <Layout className={styles.layout}>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        width={240}
      />
      <Layout>
        <Header className={styles.header}>
          <div className={styles.trigger}>
            <Icon type="menu-fold" />
          </div>
        </Header>
        <Content className={styles.content}>
          <div className={styles.main}>123</div>
        </Content>
        <Footer className={styles.footer}>©2018 Created by Yingkaixiang</Footer>
      </Layout>
    </Layout>
  );
}

App.propTypes = {};

export default App;
