/**
 * Created by snow on 30/09/2017.
 */

/**
 * Created by snow on 26/09/2017.
 */

import axios from 'axios';

export const  GET_TOKEN = 'GET_TOKEN';
export const  USER_PROFILE = 'USER_PROFILE';



/**
 * Set token action
 * */
function setToken(access_token) {
    return{
        type: GET_TOKEN,
        access_token
    }

}

/**
 * Set user profile action
 * */
function setProfile(profile) {
    return {
        type: USER_PROFILE,
        profile
    }
}

/**
 * Request token using axios library, then on send response to setToken function.
 * In set function we put new status IsAuthenticated to true and token string.
 * and return it to authReducer
 * */
export function requestAuthenticationToken(userData) {
    let body = 'grant_type=password&username=' + userData.username + '&password=' + userData.password + '&scope=openid+profile+company+roles+imbera_link_web_api';

    let data = {
        grant_type: 'password',
        username: 'lala.morquecho',
        password: 'sesamo',
        scope: 'openid profile company roles imbera_link_web_api'
    };

    let headers = {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic aW1iZXJhX2xpbmtfbW9iaWxlOm4yVU0zQlZibjY0VA=='
    };

    return dispatch => {
        return axios.post('http://192.169.244.32:8050/webapi/identity/connect/token', body, {headers})
            .then((response) => {
                //console.log("Response: " + JSON.stringify(response));
                dispatch(setToken(response));
            }).catch(err => {
                console.error("Error returned: " + err);
            });
    };
}

/** Get user profile using token obtained previously and parse response into a json.
 * */
export function RequestUserProfile(session) {
}