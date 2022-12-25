import React, { Component } from "react";

import Sidebar from './Sidebar';
import Home from './Home';
import JsAbout from './JsAbout';
import JsSyllabus from './JsSyllabus';
import Resumes from './Resumes';
import Hobbies from './Hobbies';
import DinnerSpinner from './DinnerSpinner';
import Bio from './Bio';
import Js1 from './Js1';
import JsAssessment from './JsAssessment';
import PageNotFound from './PageNotFound';
import Js1Markdown from './../assets/js1-1.md';
import Js2Markdown from './../assets/js1-2.md';
import Js3Markdown from './../assets/js1-3.md';
import Js4Markdown from './../assets/js1-4.md';
import Js5Markdown from './../assets/js1-5.md';
import Js6Markdown from './../assets/js1-6.md';
import Js7Markdown from './../assets/js1-7.md';
import Js8Markdown from './../assets/js1-8.md';
import Js9Markdown from './../assets/js1-9.md';
import Js10Markdown from './../assets/js1-10.md';
import Js1Assessment from './../assets/js1-assessment.md';

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
    <div className="App">
      <Sidebar />
        <BrowserRouter>
            <Routes>
            <Route path="/index.html" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/js_1.1" element={<Js1 mdFile={Js1Markdown} prev="/js_syllabus" next="/js_1.2" prevTitle="Syllabus" nextTitle="Lesson 1.2" />} />
            <Route path="/js_1.2" element={<Js1 mdFile={Js2Markdown} prev="/js_1.1" next="/js_1.3" prevTitle="Lesson 1.1" nextTitle="Lesson 1.3" />} />
            <Route path="/js_1.3" element={<Js1 mdFile={Js3Markdown} prev="/js_1.2" next="/js_1.4" prevTitle="Lesson 1.2" nextTitle="Lesson 1.4" />} />
            <Route path="/js_1.4" element={<Js1 mdFile={Js4Markdown} prev="/js_1.3" next="/js_1.5" prevTitle="Lesson 1.3" nextTitle="Lesson 1.5" />} />
            <Route path="/js_1.5" element={<Js1 mdFile={Js5Markdown} prev="/js_1.4" next="/js_1.6" prevTitle="Lesson 1.4" nextTitle="Lesson 1.6" />} />
            <Route path="/js_1.6" element={<Js1 mdFile={Js6Markdown} prev="/js_1.5" next="/js_1.7" prevTitle="Lesson 1.5" nextTitle="Lesson 1.7" />} />
            <Route path="/js_1.7" element={<Js1 mdFile={Js7Markdown} prev="/js_1.6" next="/js_1.8" prevTitle="Lesson 1.6" nextTitle="Lesson 1.8" />} />
            <Route path="/js_1.8" element={<Js1 mdFile={Js8Markdown} prev="/js_1.7" next="/js_1.9" prevTitle="Lesson 1.7" nextTitle="Lesson 1.9" />} />
            <Route path="/js_1.9" element={<Js1 mdFile={Js9Markdown} prev="/js_1.8" next="/js_1.10" prevTitle="Lesson 1.8" nextTitle="Lesson 1.10" />} />
            <Route path="/js_1.10" element={<Js1 mdFile={Js10Markdown} prev="/js_1.9" next="/js_1_assessment" prevTitle="Lesson 1.9" nextTitle="Module 1 Assessment" />} />
            <Route path="/js_1_assessment" element={<JsAssessment mdFile={Js1Assessment} prev="/js_1.10" prevTitle="Lesson 1.10" />} />
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/dinner-spinner" element={<DinnerSpinner />} />
            <Route path="/js_about" element={<JsAbout />} />
            <Route path="/js_syllabus" element={<JsSyllabus />} />
            
            {/* <Route path="/js_mod1/lesson1" element={<Home />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
        </div>
        );
    }
}

export default App;
