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
  path: '/user/setting',
  models: () => [import('./models/user/setting')],
  component: () => import('./routes/User/Setting/'),
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
