import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/App';

const { ConnectedRouter } = routerRedux;

/**
 * 如果当前组件不需要model
 * 请不要配置model属性会导致报错
 */
const routes = [{
  path: '/',
  component: () => import('./routes/Dashboard/'),
}, {
  path: '/component/image',
  component: () => import('./routes/Component/Image/'),
}, {
  path: '/component/imageViewer',
  component: () => import('./routes/Component/ImageViewer/'),
}, {
  path: '/component/detailPanel',
  component: () => import('./routes/Component/DetailPanel/'),
}, {
  path: '/component/player',
  models: () => [import('./models/componentDoc/playerDoc')],
  component: () => import('./routes/Component/Player/'),
}, {
  path: '/advertisement/banner',
  component: () => import('./routes/Advertisement/Banner'),
}, {
  path: '/advertisement/startup',
  models: () => [import('./models/advertisement/startup')],
  component: () => import('./routes/Advertisement/Startup'),
}, {
  path: '/user/account/register',
  component: () => import('./routes/User/Account/Register/'),
}, {
  path: '/user/role/create',
  component: () => import('./routes/User/Role/Create/'),
}, {
  path: '/user/setting',
  models: () => [import('./models/user/setting')],
  component: () => import('./routes/User/Setting/'),
}, {
  path: '/release/android',
  component: () => import('./routes/Release/Android/'),
}, {
  path: '/operationLog',
  models: () => [import('./models/operationLog/')],
  component: () => import('./routes/OperationLog/'),
}, {
  path: '/util',
  models: () => [import('./models/util/')],
  component: () => import('./routes/Util/'),
}, {
  path: '*',
  component: () => import('./routes/PageNotFound/'),
}]

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          { routes.map(({ path, ...dynamics }, index) => {
            return (
              <Route
                key={index}
                exact
                path={path}
                component={dynamic({ app, ...dynamics })}
              />
            )
          }) }
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
