import React from 'react'
import  { createRoot }  from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './src/App.js'

import './src/styles/base.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
