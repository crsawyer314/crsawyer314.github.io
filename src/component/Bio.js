import React, { Component } from "react";
// import PropTypes from "prop-types";

class Bio extends Component {
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
										<h1>Catherine Sawyer</h1>
                                        <p>Technical educator, people manager, software developer, and creator</p>
									</header>

									{/* <span class="image main"><img src="images/pic11.jpg" alt="" /></span> */}

									<p>I am passionate about increasing diversity through code.</p>
                                    
                                    <p>I started working in curriculum development and instruction in 2017 at <a href="https://acme.byu.edu/">Brigham Young University's Applied and Computational Math program</a>, working as a teaching assistant and also helping to write curriculum. In 2020, I moved to <a href="https://www.linkedin.com/school/the-coding-school/">The Coding School</a>, where I worked as their Chief Curriculum Developer, overseeing and contributing on teams working on a variety of curriculums, spanning general coding in Python and Java, to special-interest tracks like AI, Machine Learning, and Computational Biology. While there, I helped to secure a $3MM NSF grant to develop a year-long Machine Learning course. Most recently, I served as the Program Director of Curriculum for <a href="https://www.linkedin.com/company/thrivedx-formerly-hu/">ThriveDX</a>'s Software Development bootcamp, overseeing a team of 8 curriculum developers in the creation and maintenance of coursework covering the fundamentals of web development, including HTML, CSS, and JavaScript, and moving further along into progressively more technical content including React and Redux, Python, and basic cloud computing and DevOps.</p>

                                    <hr class="major" />

                                    <h2>Brigham Young University</h2>
                                    <p>While working at <a href="https://acme.byu.edu/">Brigham Young University's Applied and Computational Math program</a>, I worked as a teaching assistant and curriculum developer. I focused on Python and data science fundamentals, including writing labs on <a href="https://acme.byu.edu/00000179-af53-d74f-a3ff-bfdb22530000/webscraping2020-pdf">web scraping</a> and <a href="https://acme.byu.edu/00000179-af53-d74f-a3ff-bfdb22520001/webcrawling2020-pdf">web crawling</a>. My favorite lab covered <a href="https://acme.byu.edu/00000179-af25-d5e1-a97b-bf6512fd0000/markov2020-pdf">Markov Models</a>, culminating in creating a text generator utilizing text from a variety of sources, including Yoda quotes and Taylor Swift's 1989 album.</p>
									<p>In addition worked as a research assistant in two different groups. One was focused on developing algorithms for root finding of large polynomials. While there, I earned a $1500 BYU ORCA grant and presented our findings at several different mathematical research conferences. The other was focused on utilizing big data techniques to find the "Optimal Pizza" in Provo, Utah. I presented our findings at a math research conference, and was also featured on the local news channel.</p>
									<p>I also <a href="https://scholarsarchive.byu.edu/studentpub_uht/132/">published a thesis</a> with the BYU Honors Department. This paper analyzed over 20 years of <a href="https://www.cdc.gov/nchs/ahcd/index.htm">the NAMCS dataset</a> to explore patterns of opiate prescribing and utilized machine learning and data analysis techniques to determine specific demographics and diagnoses that led to more frequent opiate prescriptions.</p>

									<hr class="major" />

									<h2>The Coding School</h2>
									<p>While working at the Coding School, I worked with many teams across different verticals. I headed several teams, working on content development and enhancement for tracks including Python, Java, Machine Learning, AI, Web Development, Computational Biology, and more. The Coding School is focused on helping students from under-represented backgrounds (LGBTQ+, BIPOC, neurodiverse, rural location, and more) in STEM to gain the experience and knowledge necessary to excel in technical fields.</p>
									<p>I also spearheaded the summer camp initiative, designed to help students with little or no prior coding experience to develop skills over the course of one or two weeks, culminating in showcases of projects that they had built. I built and led camps, including training and managing instructional assistants, in Web Design, Machine Learning, Python, and Java, and more.</p>

									<hr class="major" />

									<h2>ThriveDX (Formerly HackerU)</h2>
									<p>As the Associate Program Director (Program Director of Curriculum) at ThriveDX, I oversaw a team of 8 Curriculum Developers in designing and building a 10-month program covering full-stack softare development, covering technologies including HTML, CSS, JavaScript, React and Redux, SQL, MongoDB, RESTful apps, Python, and basic cloud computing and DevOps.</p>
									<p>I frequently worked with Instructional Design and Graphical design teams, helped to interface with our large team of part-time instructors, conducted interviews for both instructors and curricuklum developers, helped to maintain our course catalog, and co-led presentations to external clients.</p>

									<hr class="major" />

									<h2>Current Work</h2>
									<p>I am currently focusing on obtaining my Masters of Science degree in Computer Science from Georgia Institute of Technology, as well as expanding the course offerings on this website. I am working with a few different clients in freelance/contrator positions as they arise. I am also pursuing my hobbies of quilting, pyrography (wood burning), and others (see more on my hobbies page).</p>

								</section>

						</div>
					</div>
            </div>);
        }
}
Bio.propTypes = {
   
}

Bio.defaultProps = {
   
}

export default Bio;
