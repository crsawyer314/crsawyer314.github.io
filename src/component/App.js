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
import Js2 from './Js2';
import Js3 from './Js3';
import Js4 from './Js4';
import Js5 from './Js5';
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
            <Route path="/js_1.1" element={<Js1 />} />
            <Route path="/js_1.2" element={<Js2 />} />
            <Route path="/js_1.3" element={<Js3 />} />
            <Route path="/js_1.4" element={<Js4 />} />
            <Route path="/js_1.5" element={<Js5 />} />
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
