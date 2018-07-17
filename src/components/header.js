import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    authButton() {
        return <button>Sign In</button>;
    }

    render() {
        return (
                    <nav className="nav navbar-light">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resources">Resources</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/authenticate">{this.authButton()}</Link>
                            </li>
                        </ul>
                    </nav>
        );
    }
}

export default Header;