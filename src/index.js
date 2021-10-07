import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from './pages/Rockets';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
