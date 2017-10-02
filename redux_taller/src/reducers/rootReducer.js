/**
 * Created by snow on 30/09/2017.
 */

import React from 'react';

import  {combineReducers} from  'redux'

import authentication from './loginReducer';

export default combineReducers({
    authentication
});