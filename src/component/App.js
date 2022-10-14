import React, { Component } from "react";

import Sidebar from './Sidebar';
import Home from './Home';
import JsAbout from './JsAbout';
import JsSyllabus from './JsSyllabus';
import Resumes from './Resumes';
import Hobbies from './Hobbies';
import DinnerSpinner from './DinnerSpinner';
import Bio from './Bio';
import PageNotFound from './PageNotFound';

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
            <Route path="/resumes" element={<Resumes />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/dinner-spinner" element={<DinnerSpinner />} />
            <Route path="/js/about" element={<JsAbout />} />
            <Route path="/js/syllabus" element={<JsSyllabus />} />
            
            {/* <Route path="/js/mod1/lesson1" element={<Home />} /> */}
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
