import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../Home/Home.css';
import Icon from './../Icon/Icon';

class Wrong extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='Home'>
      <Icon width='300' />
        <Link className='InitLink' to='/dashboard'>
          <div className='InitGame'> REINICIAR</div>
        </Link>
    </div>)
  }
}
 
export default Wrong;