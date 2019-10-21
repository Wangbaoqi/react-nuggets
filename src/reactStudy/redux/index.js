
import React, { Component } from 'react';
import PropTypes from 'prop-types'



import {store} from './store'


import Header from './header'
import Content from './content'

export class ThemeIndex extends Component {

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return { store }
  }
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default ThemeIndex;
