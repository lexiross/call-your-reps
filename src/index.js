import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import 'react-flexbox-layout/lib/styles.css';
import 'whatwg-fetch';
import 'promise-polyfill';

// Promise.prototype.tap = function (func) {
//   return this.then(function (value) {
//     return Promise.resolve(func(value))
//       .then(() => value);
//   });
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

