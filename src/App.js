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
              <h2>React-redux Books</h2>
            </div>
          </div>
          <div className="container">
             <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4" style={styles.marginTopSm}>
                  <BookList />
                </div>
             </div>
          </div>

      </section>
    );
  }
}

const styles = {
  marginTopSm: {
    marginTop: "50px"
  }
}

export default App;
