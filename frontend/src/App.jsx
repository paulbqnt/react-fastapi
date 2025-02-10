import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Routes from './Routes';

function App() {
    return (
        <Router>
            <Navbar />
            <Container style={{ marginTop: '20px' }}>
                <Routes />
            </Container>
        </Router>
    );
}

export default App;
