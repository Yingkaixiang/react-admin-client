import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/app').default);
app.model(require('./models/components/imageViewer').default);
app.model(require('./models/components/detailPanel').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
