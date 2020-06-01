import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Icon from './../Icon/Icon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
      return (<div className='Home'>
        <Icon width='300' />
          <Link className='InitLink' to='/dashboard'>
            <div className='InitGame'> COMEÇAR</div>
          </Link>
      </div>)
  }
}
 
export default Home;