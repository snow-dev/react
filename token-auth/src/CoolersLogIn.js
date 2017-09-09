/**
 * Created by snow on 07/09/2017.
 */

import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { requestToken } from './actions';

class CoolersLogIn extends React.Component{

    state = {
        username: '',
        password: '',
        loading: false,
        errors: {}
    };

    handleChange = (e) => {
      if(!!this.state.errors[e.target.name]){
          let errors = Object.assign({}, this.state.errors);
          delete errors[e.target.name];
          this.setState({
              [e.target.name]: e.target.value,
              errors
          });
      } else {
          this.setState({[e.target.name]: e.target.value});
      }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if(this.state.username === '') errors.username = "Can's be empty.";
        if(this.state.password === '') errors.password = "Can's be empty.";
        this.setState({errors});
        const  isValid = Object.keys(errors).length === 0;

        if(isValid){
            const {username, password} = this.state;
            this.setState({loading: true});
            this.props.requestToken({username, password});
        }
    };

    render(){

        const loginForm = (
            <form className={classnames('ui', 'form')} onSubmit={this.handleSubmit}>
                <h1>Log In</h1>

                <div className={classnames('field', {error: !!this.state.errors.username})}>                    <label htmlFor="username">Username</label>

                    <input
                        name="username"
                        value={this.state.username}
                        id="username"
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.username}</span>
                </div>

                <div className={classnames('field',{error: !!this.state.errors.password})}>
                    <label htmlFor="password">Password</label>

                    <input
                        name="password"
                        value={this.state.password}
                        type="password"
                        id="password"
                        onChange={this.handleChange}
                    />
                    <span>{this.state.errors.password}</span>
                </div>

                <div className="field">
                    <button className="ui primary button">Log In</button>
                </div>

            </form>

        );

        return(
            <div>
                {loginForm}
            </div>
        )
    }

}

export default connect(null, {requestToken}) (CoolersLogIn);

