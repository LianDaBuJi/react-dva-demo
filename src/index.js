import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [{
      id: 1,
      name: 'dva',
    }, {
      id: 2,
      name: 'antd'
    }]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
