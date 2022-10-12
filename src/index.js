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
import PageNotFound from './component/PageNotFound';
import Elements from './component/elements';

import {
  HashRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import './styles/App.css';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
