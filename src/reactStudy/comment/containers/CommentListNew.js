import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { deleteComment, initComment } from '../reducers/reduce'
import { connect } from 'react-redux'
import CommentListNew from '../components/CommentListNew'

class CommentListConnect extends Component {


  
  componentWillMount() {
    this._loadCommentList()
  }
  

  _loadCommentList() {
    const localComments = localStorage['commentList'];
    if (localComments) {
      const commentList = JSON.parse(localComments) 

      this.props.onInitComment(commentList)
    }
  }

  _saveCommentList(commentList) {
    localStorage['commentList'] = JSON.stringify(commentList)
  }


  handleSubmitDelete(index) {

    const { commentList, onDeleteComment } = this.props
    // props 是不能变的，所以这里新建一个删除了特定下标的评论列表
    const newComments = [
      ...commentList.slice(0, index),
      ...commentList.slice(index + 1)
    ]
    this._saveCommentList(newComments)

    if(onDeleteComment) {
      onDeleteComment(index)
    }
  }




  render() {
    const { commentList = [] } = this.props;
    return (
      <CommentListNew 
        commentList={commentList}
        onDelete={this.handleSubmitDelete.bind(this)}
      />
    )
  }
}

CommentListNew.propTypes = {
  // 验证传入props的类型
  commentList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    commentList: state.commentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitComment: (comment) => {
      dispatch(initComment(comment))
    },
    onDeleteComment: (index) => {
      dispatch(deleteComment(index))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentListConnect)
