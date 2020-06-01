import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../Home/Home.css';
import Icon from './../Icon/Icon';
import winner from './../../../public/images/winner.gif';
import './Winner.css';

class Winner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='Home Winner'>
      <Icon width='300' />
        <div className='Container'>
            <img className='Image' src={ winner } alt="winner" />
        </div>
        <Link className='InitLink' to='/dashboard'>
          <div className='InitGame'> REINICIAR</div>
        </Link>
    </div>)
  }
}
 
export default Winner;