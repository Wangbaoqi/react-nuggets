import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <div>home</div>
const Nav = () => <div>nav</div>
const Footer = () => <div>footer</div>


export class simple extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/home'>Home</Link>
          <Link to='/nav'>Nav</Link>
          <Link to='/footer'>Footer</Link>
        </div>

        <div className='container'>
          <Route path='/home' component={Home} />
          <Route path='/nav' component={Nav} />
          <Route path='/footer' component={Footer} />
        </div>
      </Router>
    );
  }
}

export default simple;
