import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userComment: ''
    }
  }


  inputChange(e) {
    this.setState({
      userName: e.target.value
    })

  }

  textareaChange(e) {
    this.setState({
      userComment: e.target.value
    })
  }


  commentPub() {
    const { onSubmit } = this.props;
    const { userName = '', userComment = ''} = this.state;
    if(onSubmit) {
      onSubmit({userName, userComment})
    }
  }

  render() {
    const { userName = '', userComment = ''} = this.state;
    return (
      <div className='comment-input'>
        <div className='comment-filed'>
          <span className='input-text'>UserName:</span>
          <div className='input-content'>
            <input type="text" value={userName} onChange={this.inputChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-filed'>
          <span className='input-text'>CommentText:</span>
          <div className='input-content'>
            <textarea name="" id="" cols="30" rows="6" value={userComment} onChange={this.textareaChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-public'>
          
          <button onClick={this.commentPub.bind(this)}>comment</button>
        </div>
      </div>
    )
  }
}

export default CommentInput