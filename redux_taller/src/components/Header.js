/**
 * Created by snow on 30/09/2017.
 */

import React from 'react';

import {
    Route,
    Link
} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <p> Navigation Bar</p>

                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About </Link> </li>
                    <li> <Link to="/topics">Topics</Link> </li>
                </ul>

            </div>
        );
    }
}

export default Header;
