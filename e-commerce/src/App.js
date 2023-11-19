import React, { Component } from 'react';
import Product from './Product';
import NavBar from './NavBar';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <NavBar />
        <Product />
      </>
    )
  }
}

export default App;
