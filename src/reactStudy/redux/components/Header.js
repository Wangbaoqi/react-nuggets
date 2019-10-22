import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render() {
    const { themeColor } = this.props
    return (
      <div>
        <h1 style={{ color: themeColor }}>React-redux themeSwitch header</h1>
      </div>
    );
  }
}

export default Header;






// Header 组件变的高复用性 只接受props, 但是他不是一个 dumb component 通过connect跟store有联系 
// 因此为了划分 smart component 和 dumb component，通常会将dumb放在 components folder中，smart放在 containers中

