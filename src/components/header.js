import React from 'react';
import {Link} from 'react-router-dom';
import * as actions from '../actions';
import {connect} from 'react-redux';

export class Header extends React.Component {

    authButton() {
        if (this.props.authenticated) {
            return <button onClick={()=> this.props.authenticate(false)} className="login-btn logout btn btn-default">Logout</button>
        } else {
            return <button onClick={()=> this.props.authenticate(true)} className="login-btn login btn btn-primary">Login</button>
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li id="link-home" className="nav-item">
                        <Link className="btn btn-link" to="/">Home</Link>
                    </li>
                    {this.props.authenticated?
                        <li id="link-catalogue" className="nav-item">
                            <Link className="btn btn-link" to="/catalogue">Catalogue</Link>
                        </li>
                        :''}
                    {this.props.authenticated?
                        <li id="link-profile" className="nav-item">
                            <Link className="btn btn-link" to="/profile">Profile</Link>
                        </li>
                        :''}
                    <li id="link-loginbtn" className="nav-item pull-xs-right">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>

        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.user.authenticated }
}

export default connect(mapStateToProps, actions)(Header);
