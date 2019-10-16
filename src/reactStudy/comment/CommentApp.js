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

  componentDidMount() {
    this._loadCommentList()

  }
  
  _loadCommentList() {
    const localComments = localStorage['commentList'];
    if (localComments) {
      const commentList = JSON.parse(localComments) 
      this.setState({ commentList })
    }
  }

  _saveCommentList(commentList) {
    localStorage['commentList'] = JSON.stringify(commentList)
  }

  // 子组件抛出的事件 添加评论
  handleInputSubmit(obj) {
    this.setState((prevState) => {
      return { commentList: [...[obj], ...prevState.commentList] }
    }, () => {
      this._saveCommentList(this.state.commentList)
    })
  }

  // 子组件抛出的事件 删除评论
  handleCommentDelete(flag) {
    let commentList = this.state.commentList.filter(e => e.createTime !== flag)
    this.setState({
      commentList
    })
    this._saveCommentList(commentList)
  }

  render() {
    const { commentList } = this.state;
    return (
      <div className='wrapper'>
          <CommentInput onSubmit={this.handleInputSubmit.bind(this)}></CommentInput>
          <CommentList commentList={commentList} onDelete={this.handleCommentDelete.bind(this)}></CommentList>
      </div>
    )
  }
}



export default CommentApp