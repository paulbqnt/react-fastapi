import React from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Tasks from './pages/Tasks.jsx';

const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/contact" element={<Contact />} />
        </ReactRouterRoutes>
    );
};

export default Routes;
