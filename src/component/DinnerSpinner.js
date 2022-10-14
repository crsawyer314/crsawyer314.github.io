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
						<div class="inner">

							{/* <!-- Header --> */}
							<header id="header">
								<a href="index.html" class="logo"><strong>Catherine Sawyer</strong></a>
								<ul class="icons">
									<li><a href="https://www.linkedin.com/in/catherine-sawyer/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
									<li><a href="https://github.com/crsawyer314" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</header>

							{/* <!-- Content --> */}
								<section>
									<header class="main">
										<h1>Dinner Spinner</h1>
									</header>

									<p>The following is a fun little project I made to help choose what's for dinner. It selects from a large list of tagged dinner ideas; feel free to select which attributes you're interested in, or selecting none will choose from all available options.</p>

									<hr class="major" />

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