import React    from 'react';
import ReactDOM from 'react-dom';
import Page     from "./Page";
import './index.css';

import 'whatwg-fetch';
import 'promise-polyfill';

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

