import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';


export class App extends Component {
  

  render() {
    return (
      <div>
      
        <ToastContainer autoClose={3000} />
      </div>
      );
  }
}
