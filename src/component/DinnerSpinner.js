import React, { Component } from "react";
import Picker from './Picker';
// import PropTypes from "prop-types";

class DinnerSpinner extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
            <div id="main">
						<div className="inner">

							{/* <!-- Header --> */}
							<header id="header">
								<a href="index.html" className="logo"><strong>Catherine Sawyer</strong></a>
								<ul className="icons">
									<li><a href="https://www.linkedin.com/in/catherine-sawyer/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
									<li><a href="https://github.com/crsawyer314" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
								</ul>
							</header>

							{/* <!-- Content --> */}
								<section>
									<header className="main">
										<h1>Dinner Spinner</h1>
									</header>

									<p>The following is a fun little project I made to help choose what's for dinner. It selects from a large list of tagged dinner ideas; feel free to select which attributes you're interested in, or selecting none will choose from all available options.</p>

									<hr className="major" />

									<Picker />

								</section>

						</div>
					</div>
            </div>);
        }
}
DinnerSpinner.propTypes = {
   
}

DinnerSpinner.defaultProps = {
   
}

export default DinnerSpinner;