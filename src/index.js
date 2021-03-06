import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HomeContent from './pages/home/home.js';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import ProjectContent from './pages/projects/projects.js';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
