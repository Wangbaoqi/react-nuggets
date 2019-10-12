import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'
class CommentList extends Component {

  render() {
    const { commentList = [] } = this.props;
    const comment = commentList.map((item, idx) => <Comment key={`c${idx}`} comment={item}/> )
    return (
      <div className='comment-list'>
        {comment}
      </div>
    )
  }
}



export default CommentList