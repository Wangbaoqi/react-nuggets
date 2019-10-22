import React, { Component } from 'react';

import PropTypes from 'prop-types'

import { connect } from './connect'

export class Theme extends Component {

  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  handleThemeColor(color) {
    let { onSwitchColor } = this.props;
    if(onSwitchColor) {
      onSwitchColor(color)
    }
  }
  


  render() {
    const { themeColor } = this.props
    return (
      <div >
        <button style={{ color: themeColor }} onClick={this.handleThemeColor.bind(this, 'red')}>Red</button>
        <button style={{ color: themeColor }} onClick={this.handleThemeColor.bind(this, 'blue')}>Blue</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    themeColor: state.themeColor,
    ...props
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: "CHANGE_COLOR", themeColor: color })
    }
  }
}

Theme = connect(mapStateToProps, mapDispatchToProps)(Theme)

export default Theme;
