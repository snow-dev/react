import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import CoolersPage from './CoolersPage';
import CoolersForm from './CoolersForm';
import CoolersFormLogIn from './CoolersLogIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui four item menu">
            <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
            <Link className="item" activeClassName="active" activeOnlyWhenExact to="/coolers">Cooler's</Link>
            <Link className="item" activeClassName="active" activeOnlyWhenExact to="/coolers/new">Add New Cooler</Link>
            <Link className="item" activeClassName="active" activeOnlyWhenExact to="/auth">Log In</Link>

        </div>

        <Match exactly pattern='/coolers' component={CoolersPage} />
        <Match pattern="/coolers/new" component={CoolersForm}/>
        <Match pattern="/auth" component={CoolersFormLogIn}/>

      </div>
    );
  }
}

export default App