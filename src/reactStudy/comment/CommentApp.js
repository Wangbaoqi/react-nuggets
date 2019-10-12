import React, { Component } from 'react'

import CommentInput from './CommentInput'
import CommentList from './CommentList'


class CommentApp extends Component {
  
  constructor() {
    super()
    this.state = {
      commentList: []
    }
  }


  // 子组件抛出的事件
  InputSubmit(obj) {

    this.setState((prevState) => {
      return { commentList: prevState.commentList.concat([obj])}
    })

  }


  render() {
    const { commentList } = this.state;
    return (
      <div className='wrapper'>
          <CommentInput onSubmit={this.InputSubmit.bind(this)}></CommentInput>
          <CommentList commentList={commentList}></CommentList>
      </div>
    )
  }
}



export default CommentApp