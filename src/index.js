import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



import Simple from './react-router/simple'
import RouterParam from './react-router/router';

import './reactStudy/index.css';
import App from './reactStudy/App';

import { appendRoot, render } from './react-redux/index'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentReducer from './reactStudy/comment/reducers/reduce'

import * as serviceWorker from './reactStudy/serviceWorker';


const store = createStore(commentReducer)


const el = <Provider store={store}>
  <Router >
    <Route path='/' component={App} >
      <Route path='home' component={Simple} />
      <Route path='routerPa' component={RouterParam}>
        <Route path='pa/:id' component={Simple}></Route>
      </Route>
    </Route>
  </Router>
</Provider>


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


appendRoot();
render();
