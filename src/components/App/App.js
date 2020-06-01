import React, { Component } from 'react';
import Question from './../Question/Question';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import FirebaseService from './../../services/FirebaseService';

import Routes from './../../routes/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
 
export default App;