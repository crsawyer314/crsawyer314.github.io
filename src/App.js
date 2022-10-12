import React from 'react'
import './styles/App.css';

import Sidebar from './component/Sidebar';
import Home from './component/Home';
import JsAbout from './component/JsAbout';
import JsSyllabus from './component/JsSyllabus';
import Resumes from './component/Resumes';
import Hobbies from './component/Hobbies';
import DinnerSpinner from './component/DinnerSpinner';
import PageNotFound from './component/PageNotFound';
import Elements from './component/elements';

import {
  HashRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

const defaultStyles = {
  display: "flex",
  flexDirection: "row",
  
}
function App() {
  return (
    <div className="App">
      <Sidebar />
      <HashRouter>
        <Routes>
          <Route path="/index.html" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/dinner-spinner" element={<DinnerSpinner />} />
          <Route path="/js/about" element={<JsAbout />} />
          <Route path="/js/syllabus" element={<JsSyllabus />} />
          
          <Route path="/elems" element={<Elements />} />
          {/* <Route path="/js/mod1/lesson1" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>          
      
    </div>
  );
}

export default App;
