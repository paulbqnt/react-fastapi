import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                About Page
            </Typography>
            <Typography variant="body1">
                Learn more about us on this page.
            </Typography>
        </Container>
    );
};

export default About;