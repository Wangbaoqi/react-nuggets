import React, { Component } from 'react';

export class Comment extends Component {
  
  render() {
    const { userName = '', userComment = '' } = this.props.comment
    return (
      <div className='comment'>
        <span>{userName}:</span>
        <span>{userComment}.</span>
      </div>
    );
  }
}

export default Comment;
