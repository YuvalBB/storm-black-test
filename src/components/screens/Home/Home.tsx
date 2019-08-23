import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Home() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Hey There!
            </Typography>
            <Typography variant="h5" gutterBottom>
                Welcome to the <strong>Storm Black React Test.</strong>
            </Typography>
        </Container>
    );
}
