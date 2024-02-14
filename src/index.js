import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './ui/components/App';
import ThemeStyles from './styles/theme.css';
import './styles/app.css';

ReactDOM.render(
  <Router>
    <ThemeStyles />
    <App />
  </Router>,
  document.getElementById('root')
);