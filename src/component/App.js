import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Sidebar from './component/Sidebar';
import Home from './component/Home';
import JsAbout from './component/JsAbout';
import JsSyllabus from './component/JsSyllabus';
import Resumes from './component/Resumes';
import Hobbies from './component/Hobbies';
import DinnerSpinner from './component/DinnerSpinner';
import Bio from './component/Bio';
import PageNotFound from './component/PageNotFound';

import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import './styles/App.css';

import reportWebVitals from './reportWebVitals';



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
