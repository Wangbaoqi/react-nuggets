import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



const ReactTitle = () => {

  return (
    <div className='title'>
      this is a react title
    </div>
  )
}

const ReactNav = (props) => {
  const { value } = props;
  return (
    <div className='nav'>
      {value}
    </div>
  );
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

  // 合成时间不能使用到 自定义组件中 <Header onClick>
  tapClick(e) {
    console.log(e.target, 'click is happend');
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
      </div>
    );
  }
}

export default App;





