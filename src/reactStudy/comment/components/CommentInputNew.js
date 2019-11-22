import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userComment: '',
    }
  }

  
  componentDidMount() {
    // 组件挂载完成自动聚焦输入框
    this.userInput.focus()
  }
  

  handleUserNameChange(e) {
    if(this.props.onUserNameBlur) {
      this.props.onUserNameBlur(e.target.value)
    }
  }

  handleUserNameBlue(e) {
    if(this.props.onUserNameBlur) {
      this.props.onUserNameBlur(e.target.value)
    }
  }

  handleTextareaChange(e) {
    this.setState({
      userComment: e.target.value
    })
  }

  handleCommentPub() {
    const { onSubmit, userName = '', } = this.props;
    const { userComment = '' } = this.state;
    if(onSubmit) {
      onSubmit({
        userName, 
        userComment, 
        createTime: +new Date()
      })
      this.setState({
        userComment: ''
      })
    }
  }
  

  render() {
    const { userName = '' } = this.props
    console.log(userName, 'userName')
    const { userComment = ''} = this.state;
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
  onSubmit: PropTypes.func,
  userName: PropTypes.string,
  onUserNameBlur: PropTypes.func
}


export default CommentInput