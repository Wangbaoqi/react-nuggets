import CommentInputNew from '../components/CommentInputNew'
import { addComment } from '../reducers/reduce'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import React, { Component } from 'react';

class CommentInputConnect extends Component {
  
  static propTypes = {
    onSubmit: PropTypes.func,
    commentList: PropTypes.array
  }

  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }

  componentWillMount() {
    this._loadUserName()
  }

  _loadUserName() {
    const userName = localStorage['username']
    this.setState({
      userName
    })
  }
  
  _saveUserName(name) {
    localStorage['username'] = name
    this.setState({
      userName: name
    })
  }

  _saveCommentList(commentList) {
    localStorage['commentList'] = JSON.stringify(commentList)
  }



  handleCommentPub(comment = {}) {
    const { onSubmit, commentList = [] } = this.props;
    const { userName = '', userComment = '' } = comment;
    if(!userName) return 
    if(!userComment) return 

    this._saveCommentList([...commentList, comment])
    
    if(onSubmit) {
      onSubmit(comment)
    }
  }

  render() {
    const { userName } = this.state
    return (
      <CommentInputNew 
        userName={userName}
        onSubmit={this.handleCommentPub.bind(this)}
        onUserNameBlur={this._saveUserName.bind(this)}
      />
    );
  }
}







const mapStateToProps = (state, props) => {
  return {
    commentList: state.commentList,
    ...props
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment([comment]))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputConnect)






