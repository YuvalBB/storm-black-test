import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Subscribe() {
    useEffect(() => {
        document.title = 'Subscribe';
    }, []);
    return (
        <Container maxWidth="lg">
            <Typography variant="h5" gutterBottom>
                Subscribe!
            </Typography>
        </Container>
    );
}
