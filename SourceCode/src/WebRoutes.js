import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './homepage/Home.js';
import Resume from './resume/Resume.js';
import Projects from './projects/Projects.js';
import About from './About.js';
import PageNotFound from './PageNotFound.js';

export default function WebRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}
