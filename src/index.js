import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
