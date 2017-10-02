/**
 * Created by snow on 30/09/2017.
 */

import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Topics from '../pages/topics';
import Rendering from '../pages/Rendering';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/rendering" component={Rendering} />
                </Switch>
            </div>
        );
    }
}

export default Main;
