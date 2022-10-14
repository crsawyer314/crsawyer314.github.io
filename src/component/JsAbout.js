import React, { Component } from "react";
// import PropTypes from "prop-types";

class JsAbout extends Component {
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
										<h1>JavaScript for Beginners - About</h1>
									</header>

									<span class="image main"><img src="images/pic11.jpg" alt="" /></span>

									<p>There are a lot of resources that exist to help you learn programming, so why should you use this one?</p>
									<p>First: All learning resources on this page are free, and always will be. I believe that anyone can code, and everyone who wants to do so should have the resources available to them to make that a reality.</p>
									<p>Second: The JavaScript for Beinners course is a complete course, including lessons, practice problems, and a guided project. I follow current best-practice in educational and instructional design research to help you learn. We utilize a method called Project-Based Learning, in which you work on a project that you are interested in (or you can pick from one of our example projects), and we give you the instruction you need, as you need it, to make that project a reality. In this way, you have an interesting project in your portfolio that you can both show to future employers as proof of your skills and also use to talk about your development process.</p>
									<p>Third: We don't just teach you JavaScript. Throughout the course, we also teach you important development/programming skills, like how to navigate and understand technical/programming language documentation, how to search and understand results for programming questions, how to use GitHub, and more.</p>
									<p>And lastly, this course is a great jumping-off point for any of the other courses hosted on this website, which we encourage you to peruse as they pique your interest!</p>

								</section>

						</div>
					</div>
            </div>);
        }
}
JsAbout.propTypes = {
   
}

JsAbout.defaultProps = {
   
}

export default JsAbout;