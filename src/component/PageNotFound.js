import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from './../assets/logo.svg';

class PageNotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <div id="main">
                <header id="header">
                    <a href="index.html" className="logo"><strong>Catherine Sawyer</strong></a>
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/catherine-sawyer/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/crsawyer314" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                </header>
                <div className="content">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>
                        404 Page Not Found
                    </h2>
                </div>
            
            </div>);
        }
    
}
PageNotFound.propTypes = {
   
}

PageNotFound.defaultProps = {
   
}

export default PageNotFound;