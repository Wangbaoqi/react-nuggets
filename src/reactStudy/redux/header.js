import React, { Component } from 'react';

import PropTypes from 'prop-types'


export class Header extends Component {

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
        <h1 style={{ color: themeColor }}>React-redux themeSwitch</h1>
      </div>
    );
  }
}

export default Header;
