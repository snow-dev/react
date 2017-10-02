import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import   createBrowserHistory from 'history/createBrowserHistory';
import   thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const history = createBrowserHistory();

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>

</Provider>,
    document.getElementById('root')
);

registerServiceWorker();
