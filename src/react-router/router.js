import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Sub = ({ match }) => {
  return (
    <div>
      {match.params.subId}
    </div>
  )
}


const Catgetor = ({ match }) => {
  return (
    <div>
      <p>{match.params.id}</p>
      <ul>
        <li>
          <Link to={`/cat/${match.params.id}/sub/1`}>sub1</Link>
        </li>
        <li>
          <Link to={`/cat/${match.params.id}/sub/2`}>sub2</Link>
        </li>
        <li>
          <Link to={`/cat/${match.params.id}/sub/3`}>sub3</Link>
        </li>
      </ul>

      <div className='subContainer'>
        <Route path='/cat/:id/sub/:subId' component={Sub}></Route>
      </div>
    </div>
  )
}



export class RouterParam extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/cat/1'>cat1</Link>
          <Link to='/cat/2'>cat2</Link>
          <Link to='/cat/3'>cat3</Link>
        </div>

        <div className='container'>
          <Route path='/cat/:id' component={Catgetor} />
        </div>
      </Router>
    );
  }
}

export default RouterParam;
