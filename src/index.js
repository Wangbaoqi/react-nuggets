import React from 'react';
import ReactDOM from 'react-dom';
import './reactStudy/index.css';
import App from './reactStudy/App';

import CommentApp from './reactStudy/comment/CommentApp'


import * as serviceWorker from './reactStudy/serviceWorker';



ReactDOM.render(
  <App/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();