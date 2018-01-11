import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './routes/App';
import Dashboard from './routes/Dashboard/';

function RouterConfig({ history }) {
  return (
    <App>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </App>
  );
}

export default RouterConfig;
