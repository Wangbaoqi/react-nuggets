
import React, { Component } from 'react';
import PropTypes from 'prop-types'



// connect 是纯函数 

// connect 的参数为什么不是(mapStateToProps, WrappedComponent)这种？

// WrappedComponent 是pure component 也是dumb component

// mapStateToProps 告知connect从store里取数据


export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  // Connect 为高阶组件
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor() {
      super()
      this.state ={
        allProps: {}
      }
    }

    componentWillMount() {
      const { store } = this.context;

      // update merge 之后的state和props
      this._updateProps();

      // 订阅 更新事件 
      store.subscribe(() => this._updateProps())

    }

    _updateProps() {
      const { store } = this.context;
      // this.props 是传入 dumb component 的props
      const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props): {}
      const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render() {
      const { allProps } = this.state
      return <WrappedComponent {...allProps} />     
    }
  }

  return Connect
}

