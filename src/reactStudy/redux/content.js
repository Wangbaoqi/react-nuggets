import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from './connect'
import Theme from './theme'
export class Content extends Component {


  static propsTypes = {
    themeColor: PropTypes.string
  }

  
  render() {
    const { themeColor } = this.props
    return (
      <div>
        <p style={{ color: themeColor}}>react-redux themeswitch</p>
        <Theme/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)

export default Content;
