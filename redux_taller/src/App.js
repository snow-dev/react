import React, { Component } from 'react';

// Redux & Routes section imports
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter} from 'react-router-dom';

// Pages or views and styles section import.
import About from './pages/about';
import Topics from './pages/topics';
import Home from './pages/home';

import Header from './components/Header';
import Main from './components/Main';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
          <Header/>
          <Main/>
      </div>
    );
  }
}

function mapStatetoProps(store) {
    return {
        session: store.authentication
    }
}

export default withRouter(connect(mapStatetoProps, {})(App));
