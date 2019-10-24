
import React, { Component } from 'react';
import {store} from './store'
import Provider from './provider'

// 将Header分成smart component 和 dumb component
import Header from './containers/Header'

import Content from './content'

export class ThemeIndex extends Component {
  
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header headerProps={'headerhhh'}/>
          <Content/>
        </Provider>
      </div>
    );
  }
}

export default ThemeIndex;
