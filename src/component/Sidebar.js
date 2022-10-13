import React, { Component } from "react";
import PropTypes from "prop-types";
import Submenu from './Submenu';
import "./../styles/main.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {NavLink} from "react-router-dom";

// import { useNavigate } from "react-router-dom";


const mod1Title = "Module 1 - Introduction to Programming";
const mod1List = [
  "1.1 Why software development, and why JavaScript?",
  "1.2 How to set up your computer for JavaScript development",
  "1.3 HTML and CSS Basics",
  "1.4 HTML and CSS Basics, cont",
  "1.5 Intro to Interactivity",
  "1.6 Variables and QuerySelector",
  "1.7 Arrays",
  "1.8 For loops",
  "1.9 Objects",
  "1.10 Forms and Buttons",
  "Assessment 1"
];
const mod2Title = "Module 2 - Basic Programming";
const mod2List = [
  "2.1 Variables and data types",
  "2.2 Mathematical and logical operators",
  "2.3 Booleans and Conditionals (if/else statements)",
  "2.4 Switch statements",
  "2.5 While Loops",
  "2.6 For Loops",
  "Assessment 2"
];
const mod3Title = "Module 3 - Intermediate Programming";
const mod3List = [
  "3.1 Functions",
  "3.2 Advanced functions",
  "3.3 OOP",
  "3.4 Classes, cont",
  "3.5 Functional programming",
  "3.6 OOP vs Functional Programming",
  "Assessment 3"
];
const mod4Title = "Module 4 - Advanced Programming";
const mod4List = [
  "4.1 Recursion",
  "4.2 Error handling",
  "4.3 Promises",
  "4.4 Promises, cont",
  "4.5 Async/Await",
  "Assessment 4"
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