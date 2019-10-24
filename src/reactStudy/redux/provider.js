import React, { Component } from 'react';
import PropTypes from 'prop-types'


// 统一处理 store 数据 向子组件传递下去

export class Provider extends Component {

  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return { store: this.props.store }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Provider;

