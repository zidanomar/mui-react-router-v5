import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './themes';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
