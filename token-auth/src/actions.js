/**
 * Created by snow on 06/09/2017.
 */
import axios from 'axios';

export const SET_COOLERS = 'SET_COOLERS';
export const ADD_COOLER = 'ADD_COOLER';
export const GET_TOKEN = 'GET_TOKEN';


function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function handleToken(response) {
    console.log("Token request: " + JSON.stringify(response));
}


export function setCoolers(coolers) {
    return {
        type:SET_COOLERS,
        coolers
    }
}

export  function addCooler(cooler) {
    return {
        type: ADD_COOLER,
        cooler
    }
}

export function getToken(response) {
    return {
        type: GET_TOKEN,
        response
    }
}



export function saveCooler(data) {
    return dispatch => {
        return fetch('/api/coolers', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => dispatch(addCooler(data.cooler)));
    }
}

export function fetchCoolers() {
    return dispatch => {
        fetch('/api/coolers')
            .then(res => res.json())
            .then(data => dispatch(setCoolers(data.coolers)));
        }
    }

export function requestToken(data) {



    let grant_type = 'password';
    let composedReq = "grant_type=" + grant_type + "&username=" + data.username + "&password=" + data.password + "&scope=openid+profile+company+roles+imbera_link_web_api";

    let config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic aW1iZXJhX2xpbmtfbW9iaWxlOm4yVU0zQlZibjY0VA=="
        },
        body:'grant_type=password&username=' + data.username + '&password=' + data.password +'&scope=openid+profile+company+roles+imbera_link_web_api'
    };

    return dispatch => {
        fetch('http://192.169.244.32:8050/webapi/identity/connect/token', config)
        .then(response => {
            console.log("Response Token: " + JSON.stringify(response));
        });
    }

}

