/**
 * Created by snow on 02/10/2017.
 */

import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="body">
                <h1 className="title">MyApp</h1>
                <div className="content">
                    {children}
                </div>
            </div>
        );
    }
}

export default Layout;
