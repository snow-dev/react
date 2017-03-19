import  React from 'react';
import {render} from 'react-dom';

export class Header extends  React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <li href="#">Source</li>
                        <li href="#">Cursos</li>
                        <li href="#">About</li>
                        <li href="#">A</li>
                    </div>
                </div>
            </nav>
        )
    }
}