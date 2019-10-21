import React, { Component } from 'react';

import PropTypes from 'prop-types'

export class Theme extends Component {

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


  handleThemeColor(color) {
    let { store } = this.context;

    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }
  


  render() {
    const { themeColor } = this.state
    return (
      <div >
        <button style={{ color: themeColor }} onClick={this.handleThemeColor.bind(this, 'red')}>Red</button>
        <button style={{ color: themeColor }} onClick={this.handleThemeColor.bind(this, 'blue')}>Blue</button>
      </div>
    );
  }
}

export default Theme;
