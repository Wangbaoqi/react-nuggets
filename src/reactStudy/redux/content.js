import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Theme from './theme'
export class Content extends Component {

  static contextTypes = {
    store: PropTypes.object
  }
  constructor() {
    super()
    this.state = {
      themeColor: ''
    }
  }

  componentWillMount() {
    const { store, } = this.context

    this._updateThemeState()
    store.subscribe(() => this._updateThemeState())
   
  }
  

  _updateThemeState() {
    const { store } = this.context

    this.setState({
      themeColor: store.getState().themeColor
    })
  }

  
  render() {
    const { themeColor } = this.state
    return (
      <div>
        <p style={{ color: themeColor}}>react-redux themeswitch</p>
        <Theme/>
      </div>
    );
  }
}

export default Content;
