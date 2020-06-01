import React, { Component } from 'react';
import icon from './../../../public/images/icon.png'; 
import './Icon.css';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width || 100,
            heigth: props.with || 100
        };
    }

  render() {
    return (
        <div className='Icon'>
            <img width={this.state.width} src={icon} alt="Icon" />
        </div>
    );
  }
}
 
export default Icon;