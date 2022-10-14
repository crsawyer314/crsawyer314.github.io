import React, { Component } from "react";
import PropTypes from "prop-types";
import Submenu from './Submenu';
import "./../styles/main.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import {NavLink} from "react-router-dom";

// import { useNavigate } from "react-router-dom";


const mod1Title = "Module 1 - Introduction to Programming";
const mod1List = [
  {title: "1.1 Why software development, and why JavaScript?",
   link: "/js/1.1"},
   {title: "1.2 How to set up your computer for JavaScript development",
   link: "/js/1.2"},
   {title: "1.3 HTML and CSS Basics",
   link: "/js/1.3"},
   {title: "1.4 HTML and CSS Basics, cont",
   link: "/js/1.4"},
   {title: "1.5 Intro to Interactivity",
   link: "/js/1.5"},
   {title: "1.6 Variables and QuerySelector",
   link: "/js/1.6"},
   {title: "1.7 Arrays",
   link: "/js/1.7"},
   {title: "1.8 For loops",
   link: "/js/1.8"},
   {title: "1.9 Objects",
   link: "/js/1.9"},
   {title: "1.10 Forms and Buttons",
   link: "/js/1.10"},
   {title: "Assessment 1",
   link: "/js/1-assessment"}
];
const mod2Title = "Module 2 - Basic Programming";
const mod2List = [
    {title: "2.1 Variables and data types",
   link: "/js/2.1"},
   {title: "2.2 Mathematical and logical operators",
   link: "/js/2.2"},
   {title: "2.3 Booleans and Conditionals (if/else statements)",
   link: "/js/2.3"},
   {title: "2.4 Switch statements",
   link: "/js/2.4"},
   {title: "2.5 While Loops",
   link: "/js/2.5"},
   {title: "2.6 For Loops",
   link: "/js/2.6"},
   {title: "Assessment 2",
   link: "/js/2-assessment"}
];
const mod3Title = "Module 3 - Intermediate Programming";
const mod3List = [
    {title: "3.1 Functions",
   link: "/js/3.1"},
   {title: "3.2 Advanced functions",
   link: "/js/3.2"},
   {title: "3.3 OOP",
   link: "/js/3.3"},
   {title: "3.4 Classes, cont",
   link: "/js/3.4"},
   {title: "3.5 Functional programming",
   link: "/js/3.5"},
   {title: "3.6 OOP vs Functional Programming",
   link: "/js/3.6"},
   {title: "Assessment 3",
   link: "/js/3-assessment"}
];
const mod4Title = "Module 4 - Advanced Programming";
const mod4List = [
    {title: "4.1 Recursion",
   link: "/js/4.1"},
   {title: "4.2 Error handling",
   link: "/js/4.2"},
   {title: "4.3 Promises",
   link: "/js/4.3"},
   {title: "4.4 Promises, cont",
   link: "/js/4.4"},
   {title: "4.5 Async/Await",
   link: "/js/4.5"},
   {title: "Assessment 4",
   link: "/js/4-assessment"}
];

// const navigate = useNavigate();

class Sidebar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {}
    }

    render() {
        
        return (
            <div id="sidebar">
    <div className="inner">

        {/* <!-- Menu --> */}
            <nav id="menu">
                <header className="major">
                    <Typography>Menu</Typography>
                </header>
                <ul>
                    <li><Typography><a href="/home">Homepage</a></Typography></li>
                    <li>
                        <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>JavaScript for Beginners</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <ul>
                            <li><Typography><a href="/js/about">About</a></Typography></li>
                            {/* set state to stay open when clicked/change route */}
                            <li><Typography><a href="/js/syllabus">Syllabus</a></Typography></li>
                            <li><Submenu title={mod1Title} itemList={mod1List}/></li>
                            <li><Submenu title={mod2Title} itemList={mod2List}/></li>
                            <li><Submenu title={mod3Title} itemList={mod3List}/></li>
                            <li><Submenu title={mod4Title} itemList={mod4List}/></li>
                        </ul>
                        </AccordionDetails>
                        </Accordion>
                    </li>
                    <li><Typography><a href="/resumes">Resumes and Interviewing</a></Typography></li>
                    <li><Typography><a href="/hobbies">Hobbies</a></Typography></li>
                    <li><Typography><a href="/dinner-spinner">Dinner Spinner</a></Typography></li>
                </ul>
            </nav>

        {/* <!-- Footer --> */}
            <footer id="footer">
                <Typography className="copyright">&copy; Catherine Sawyer. All rights reserved.</Typography>
            </footer>
            </div>
    </div>)
    }
}
Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
    
}

Sidebar.defaultProps = {
    // styles: {}
}

export default Sidebar;