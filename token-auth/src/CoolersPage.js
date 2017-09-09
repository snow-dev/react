/**
 * Created by snow on 06/09/2017.
 */

import React from 'react';
import { connect } from 'react-redux'
import CoolersList from './CoolersList';
import { fetchCoolers } from './actions';

class CoolersPage extends React.Component{
    componentDidMount(){
        this.props.fetchCoolers();
    }

    render(){
        return (
          <div>
              <h1>Coolers list</h1>
              <CoolersList coolers={this.props.coolers}/>
          </div>
        );
    }
}

CoolersPage.propTypes = {
    // eslint-disable-next-line
    coolers: React.PropTypes.array.isRequired,
    // eslint-disable-next-line
    fetchCoolers : React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return{
        coolers: state.coolers
    }
}

export default connect(mapStateToProps, { fetchCoolers })(CoolersPage);