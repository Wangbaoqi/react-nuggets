import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Comment extends Component {
  

  constructor() {
    super()

    this.state = {
      localStrTime: ''
    }
  }
  

  
  componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(
      () => {
        this._updateTimeString()
      },
      8000
    )
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }
  
  
  _updateTimeString() {
    
    const { createTime = '' } = this.props.comment;
    const duration = (+Date.now() - createTime) / 1000;
    
    let localStr = ''

    if(duration >= 3600) {
      localStr = `${(duration / 3600).toFixed()}小时前` 
    }else if(duration >= 60 && duration < 3600) {
      localStr = `${(duration / 60).toFixed()}分钟前`
    }else{
      localStr = `${Math.max(duration, 1).toFixed()}秒前`
    }
    this.setState({
      localStrTime: localStr
    })
  }

  // 校验输入框中的内容 防止XXS攻击
  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }


  handleDeleteComment(flag) {
    const { onDeleteComment } = this.props;
    onDeleteComment(flag)
  }

  render() {
    const { userName = '', userComment = '', createTime } = this.props.comment
    const { localStrTime = ''} = this.state;
    return (
      <div className='comment'>
        <p>
          <span className='comment-user'>{userName}:</span>
          <span dangerouslySetInnerHTML={{__html: this._getProcessedContent(userComment)}} ></span>
        </p>
        <p className='comment-time'>
          <span>{localStrTime}</span>
          <button onClick={this.handleDeleteComment.bind(this, createTime)}>删除</button>
        </p>
        
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

export default Comment;
