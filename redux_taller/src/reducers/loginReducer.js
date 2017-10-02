/**
 * Created by snow on 30/09/2017.
 */


import { GET_TOKEN, USER_PROFILE } from '../actions/actions';

const initialUserState = {
    IsAuthenticated: false,
    token: '',
    //User profile
    profile: [
        {
            sub: '',
            nickname: '',
            name: 'hola',
            user_type: '',
            role: []
        }
    ]
};

/**
 *
 * */
export default function authentication(state = initialUserState, action) {
    switch (action.type){

        case GET_TOKEN:
            return Object.assign({}, state, {
                IsAuthenticated: true,
                token: action.access_token
            });

        default: return state
    }

}