import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'
class CommentList extends Component {


  handleSubmitDelete(flag) {
    this.props.onDelete(flag)
  }

  render() {
    const { commentList = [] } = this.props;
    const comment = commentList.map((item, idx) => <Comment key={`c${idx}`} index={idx} comment={item} onDeleteComment={this.handleSubmitDelete.bind(this)}/> )
    return (
      <div className='comment-list'>
        {comment}
      </div>
    )
  }
}

CommentList.propTypes = {
  // 验证传入props的类型
  commentList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}




export default CommentList