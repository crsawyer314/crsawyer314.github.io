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
import PageNotFound from './PageNotFound';
import Js1Markdown from './../assets/js1-1.md';
import Js2Markdown from './../assets/js1-2.md';
import Js3Markdown from './../assets/js1-3.md';
import Js4Markdown from './../assets/js1-4.md';
import Js5Markdown from './../assets/js1-5.md';

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
            <Route path="/js_1.1" element={<Js1 mdFile={Js1Markdown} />} />
            <Route path="/js_1.2" element={<Js1 mdFile={Js2Markdown} />} />
            <Route path="/js_1.3" element={<Js1 mdFile={Js3Markdown} />} />
            <Route path="/js_1.4" element={<Js1 mdFile={Js4Markdown} />} />
            <Route path="/js_1.5" element={<Js1 mdFile={Js5Markdown} />} />
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
