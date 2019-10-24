import React from 'react';
import ReactDOM from 'react-dom';
import './reactStudy/index.css';
import App from './reactStudy/App';

import { appendRoot, render } from './react-redux/index'

import CommentApp from './reactStudy/comment/CommentApp'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentReducer from './reactStudy/comment/reducers/reduce'


import * as serviceWorker from './reactStudy/serviceWorker';



// create reducer 
// function reducer(state, action) {
//   if(!state) {
//     return {
//       themeColor: 'red'
//     }
//   }
//   switch (action.type) {
//     case 'CHANGE_COLOR':
//       return { ...state, themeColor: action.color}
//     default:
//       return state
//   }
// }

// // create store 
// function createStore(reducer) {
//   let state = null;
//   let listeners = [];

//   const getState = () => state;

//   const subscribe = (listener) => listeners.push(listener);

//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach(listener => listener())
//   }

//   // init state 
//   dispatch({})

//   return { getState, subscribe, dispatch }
// }


const store = createStore(commentReducer)







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
