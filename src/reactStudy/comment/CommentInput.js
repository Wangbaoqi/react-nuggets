import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userComment: '',
    }
  }

  
  componentWillMount() {
    this._loadUserName()
  }
  

  
  componentDidMount() {
    

    // 组件挂载完成自动聚焦输入框
    this.userInput.focus()
  }
  


  _loadUserName() {
    const userName = localStorage['username']
    this.setState({
      userName
    })
  }

  _saveUserName(userName) {
    localStorage['username'] = userName
  }


  handleUserNameChange(e) {
    this.setState({
      userName: e.target.value
    })
  }

  handleUserNameBlue(e) {
    this._saveUserName(e.target.value)
  }

  handleTextareaChange(e) {
    this.setState({
      userComment: e.target.value
    })
  }

  handleCommentPub() {
    const { onSubmit } = this.props;
    const { userName = '', userComment = '' } = this.state;
    if(onSubmit) {
      if(!userName || !userComment) { 
        alert('输入评论内容')
        return
      }

      onSubmit({userName, userComment, createTime: +new Date()})
      this.setState({
        userComment: ''
      })
    }
  }

  render() {
    const { userName = '', userComment = ''} = this.state;
    return (
      <div className='comment-input'>
        <div className='comment-filed'>
          <span className='input-text'>UserName:</span>
          <div className='input-content'>
            <input type="text" value={userName} onChange={this.handleUserNameChange.bind(this)} onBlur={this.handleUserNameBlue.bind(this)}/>
          </div>
        </div>
        <div className='comment-filed'>
          <span className='input-text'>CommentText:</span>
          <div className='input-content'>
            <textarea name="" id="" cols="30" rows="6" value={userComment} onChange={this.handleTextareaChange.bind(this)} ref={(input) => this.userInput = input}/>
          </div>
        </div>
        <div className='comment-public'>
          
          <button onClick={this.handleCommentPub.bind(this)}>comment</button>
        </div>
      </div>
    )
  }
}

CommentInput.propTypes = {
  onSubmit: PropTypes.func
}


export default CommentInput