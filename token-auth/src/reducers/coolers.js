/**
 * Created by snow on 06/09/2017.
 */

import { SET_COOLERS, ADD_COOLER, GET_TOKEN } from '../actions';


export default function coolers(state = [], action = {} ) {
    switch (action.type){
        case ADD_COOLER:
            return [
                ...state,
                action.cooler
            ];
        case GET_TOKEN:
            return action.response;
        case SET_COOLERS:
            return action.coolers;
        default: return state
    }
}