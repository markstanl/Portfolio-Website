import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './homepage/Home.js';
import Resume from './resume/Resume.js';
import Projects from './projects/Projects.js';
import ProjectsMobile from './projects/projectsMobile/ProjectsMobile.js';
import About from './about/About.js';
import PageNotFound from './pagenotfound/PageNotFound.js';


export default function WebRoutes({isMobile, windowWidth}) {
    console.log(isMobile);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home isMobile={isMobile}/>} />
                <Route path='/resume' element={<Resume isMobile={isMobile} windowWidth={windowWidth}/>} />
                <Route path='/projects' element={isMobile ? <ProjectsMobile windowWidth={windowWidth} /> : <Projects isMobile={isMobile}/>} />
                <Route path='/about' element={<About isMobile={isMobile} windowWidth={windowWidth} />} />
                <Route path='*' element={<PageNotFound isMobile={isMobile}/>} />
            </Routes>
        </Router>
    );
}
