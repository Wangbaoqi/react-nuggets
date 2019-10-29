import React, {Component} from 'react';

import PropTypes from 'prop-types';


import logo from './logo.svg';
import './App.css';

// import CommentApp from '../reactStudy/comment/CommentApp'

import CommentApp from '../reactStudy/comment/containers/CommentAppNew'


import ThemeIndex from '../reactStudy/redux/index'



const ReactTitle = () => {

  return (
    <div className='title'>
      this is a react title
    </div>
  )
}



class ReactNav extends Component {

  // 子组件中获取 context的值 必须声明 contextTypes
  static contextTypes = {
    theme: PropTypes.string
  }

  render() {
    const { value } = this.props;
    return (
      <div className='nav'>
        {value}
        <span>nav Context: {this.context.theme}</span>
      </div>
    );
  }
}




const ReactContent = () => {
  return (
    <div className='content'>
      this is a react content
    </div>
  );
}


const ReactFooter = () => {
  return (
    <div className='footer'>
      this is a react footer
    </div>
  );
}


const ReactContainer = (props) => {
  console.log(props.children, 'props.children');
  
  return (
    <div className='container'>
      {props.children}
    </div>
  );
}





// rcfc 
class LikeButton extends Component {

  // 默认的props值 不需要传值 也不能传空值
  static defaultProps = {
    goodText: 'good',
    badText: 'bad'
  }


  constructor(props) {
    super(props)

    this.state = {
      isLike: false,
      count: 0
    }
  }

  handleClick() {
    const { isLike } = this.state;
    this.setState({
      isLike: !isLike
    })

    this.setState((prevState) => {
      return {count: prevState.count + 1 }
    })
  }

  render() {
    const { isLike, count } = this.state;
    const { goodText, badText  } = this.props;
    return (
      <div className='likeBtn'>
        <button onClick={this.handleClick.bind(this)}>
          { isLike ? goodText : badText }
        </button>
        <p>{count}</p>
      </div>
    )
  }
}





export class App extends Component {

  // 验证context的类型
  static childContextTypes = {
    theme: PropTypes.string,
  }


  constructor() {
    super()
    this.state = {
      containerColor: 'red'
    }
  }

  // 父组件中声明 context 的值
  getChildContext() {
    return { theme: this.state.containerColor, }
  }


  // 合成时间不能使用到 自定义组件中 <Header onClick>
  tapClick(e) {
    console.log(e.target, 'click is happend');
  }

  
  componentDidMount() {
    // this.input.focus()
    this.setState({
      containerColor: 'green'
    })
  }
  

  render() {


    const className = 'react'

    const reactShow = 100 > 99 ? <div>hh good</div> : <div>hh fail</div>

    const navList = ['home', 'index', 'mine']

    const navItems = navList.map((item, index) => 
      <ReactNav key={`nav${index}`} value={item}/>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <article className={className}>
          {className}
          <section>
            this is a shit html
        </section>
          {reactShow}
          <section>
            {/*  */}
            <button onClick={this.tapClick.bind(this)}>click</button>
          </section>
        </article>

        <ReactTitle />
        <ReactNav />
        <ReactContent />
        <ReactFooter />


        <LikeButton />

        {navItems}

        <input type="text" ref={(input) => this.input = input}/>

        <ReactContainer>
          <div className='container0' style={{fontSize: '20px', color: this.state.containerColor}}>container0</div>
          <div className='container1'></div>

          <ReactContent />
        </ReactContainer>



        {/* 评论功能 */}
        <CommentApp/>


        <ThemeIndex/>

        {/* router */}
        {/* <Simple/>
        <RouterParam/> */}
      </div>
    );
  }
}

export default App;





