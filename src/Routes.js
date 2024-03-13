import React from './react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './homepage/Home.js';
import Resume from './Resume';
import Projects from './Projects';
import About from './About';
import PageNotFound from './PageNotFound.js';

export default function Routes(){

    return(
        <Router>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
                <Route path='/resume'>
                    <Resume />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/About'>
                    <About />
                </Route>
                    <PageNotFound />
                <Route>

                </Route>

            </Switch>
        </Router>
    );
}