import React, { Component } from 'react';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section style={{"background": "#f3f3f3", "height": "100vh"}}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>React-redux Books</h2>
            </div>
          </div>
          <div className="container">
             <div className="row" style={styles.marginTopSm}>
                <div className="col-xs-12 col-sm-4 col-md-4" style={{"marginTop": "10px"}}>
                  <BookList />
                </div>
                <div className="col-xs-12 col-sm-8 col-md-8" style={{"marginTop": "10px"}}>
                    <BookDetail />
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
