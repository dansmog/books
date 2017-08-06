import React, { Component } from 'react';
import BookList from './containers/book-list';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
          </div>
          <BookList />

      </section>
    );
  }
}

export default App;
