import React, { Component } from 'react'


import CommentInput from './CommentInputNew'
import CommentList from './CommentListNew'


class CommentApp extends Component {
  
  render() {
    return (
      <div className='wrapper'>
          <CommentInput />
          <CommentList />
      </div>
    )
  }
}

export default CommentApp