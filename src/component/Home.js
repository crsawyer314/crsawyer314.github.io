import React, { Component } from "react";
// import PropTypes from "prop-types";
import headshot from './../assets/catherine_sawyer_profile.jpg';

class Home extends Component {
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
    
                                {/* <!-- Banner --> */}
                                    <section id="banner">
                                        <div className="content">
                                            <header>
                                                <h1>Hi, I’m Catherine</h1>
                                                <p>Technical educator, people manager, software developer, and creator</p>
                                            </header>
                                            <p>My passion is increasing diversity through code.</p>
                                            <p>Whether it is grade-school students wanting to learn a new hobby or adults looking to break into tech, there is a space for everyone to learn to code. I host some personal projects on this website, including my <a href="/js_about">JavaScript for Adult Beginners</a>, a course targeted at adults looking to upskill and learn code.</p>
                                            <p>This course is designed for those who have no prior knowledge about code or programming whatsoever, and will guide you not only through your learning journey, but also through the necessary steps to create a meaningful project for your personal portfolio.</p>
                                            <ul className="actions">
                                                <li><a href="/bio" className="button big">Learn More</a></li>
                                            </ul>
                                        </div>
                                        <span className="image object">
                                        <img src={headshot} className="headshot" alt="Headshot of Catherine Sawyer, woman in gray shirt with colorful short hair and glasses, smiling, tan background" />
                                        </span>
                                    </section>
    
                                {/* <!-- Section --> */}
                                    <section>
                                        <header className="major">
                                            <h2>Erat lacinia</h2>
                                        </header>
                                        <div className="features">
                                            <article>
                                                <span className="icon fa-gem"></span>
                                                <div className="content">
                                                    <h3>Portitor ullamcorper</h3>
                                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                                </div>
                                            </article>
                                            <article>
                                                <span className="icon solid fa-paper-plane"></span>
                                                <div className="content">
                                                    <h3>Sapien veroeros</h3>
                                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                                </div>
                                            </article>
                                            <article>
                                                <span className="icon solid fa-rocket"></span>
                                                <div className="content">
                                                    <h3>Quam lorem ipsum</h3>
                                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                                </div>
                                            </article>
                                            <article>
                                                <span className="icon solid fa-signal"></span>
                                                <div className="content">
                                                    <h3>Sed magna finibus</h3>
                                                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                                </div>
                                            </article>
                                        </div>
                                    </section>
    
                                
                            </div>
                        </div>
            </div>);
        }
}
Home.propTypes = {
   
}

Home.defaultProps = {
   
}

export default Home;
