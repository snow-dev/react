/**
 * Created by snow on 06/09/2017.
 */

import React from 'react';
import classnames from 'classnames';
import { connect} from 'react-redux';
import { Redirect } from 'react-router';
import { saveCooler } from  './actions';


class CoolersForm extends React.Component{

    state = {
        serial: '',
        macAddress: '',
        errors: {},
        loading: false,
        done: false
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
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    handleSubmit = (e) => {
      e.preventDefault();

      // Validation

      let errors = {};
      if(this.state.serial === '') errors.serial = "Can't be empty";
      if(this.state.macAddress === '') errors.macAddress = "Can't be empty";
      this.setState({errors});
      const isValid = Object.keys(errors).length === 0;

      if(isValid){
          const {serial, macAddress } = this.state;
          this.setState({loading: true});
          this.props.saveCooler({serial, macAddress}).then(
              () =>{this.setState({done:true})},
              (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false}))
          )
      }

    };

    render(){

        const form = (
            <form className={classnames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
                <h1>Register New Cooler</h1>

                {   this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

                <div className={classnames('field', {error: !!this.state.errors.serial})}>
                    <label htmlFor="serial">Serial</label>

                    <input
                        name="serial"
                        value={this.state.serial}
                        onChange={this.handleChange}
                        id="serial"/>
                    <span>{this.state.errors.serial}</span>
                </div>

                <div className={classnames('field', {error: !!this.state.macAddress})}>
                    <label htmlFor="macAddress">MAC Address</label>

                    <input name="macAddress"
                           value={this.state.macAddress}
                           onChange={this.handleChange}
                           id="macAddress"/>
                    <span>{this.state.errors.macAddress}</span>
                </div>

                <div className="field">
                    <button className="ui primary button">Log In</button>
                </div>

            </form>
        );

        return(
            <div>
                {this.state.done ? <Redirect  to="/coolers"/>: form }
            </div>
        );
    }
}

export default connect(null, {saveCooler}) (CoolersForm);