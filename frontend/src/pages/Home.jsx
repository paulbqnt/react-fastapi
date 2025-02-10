import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Home Page
            </Typography>
            <Typography variant="body1">
                Welcome to the Home Page!
            </Typography>
        </Container>
    );
};

export default Home;
