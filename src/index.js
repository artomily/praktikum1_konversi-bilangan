import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Biner from './Biner';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Oktal from './Oktal';
import Decimal from './Decimal';
import Hexadecimal from './Hexadecimal';

ReactDOM.render(
  <React.StrictMode>
    <Biner />
    <Oktal />
    <Decimal />
    <Hexadecimal />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();