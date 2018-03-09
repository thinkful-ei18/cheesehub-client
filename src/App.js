import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCheeses } from './actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    let arr = this.props.cheeses.map(cheese => <li>{cheese}</li>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{arr}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(App);
