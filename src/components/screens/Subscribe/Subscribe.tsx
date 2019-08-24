import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';
import IframeModal from '../../IframeModal/IframeModal';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    navLink: {
        display: 'flex',
        justifyContent: 'center',
        color: 'inherit',
        textDecoration: 'none'
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

export default function Subscribe() {
    const classes = useStyles();
    useEffect(() => {
        document.title = 'Subscribe';
    }, []);
    return (
        <Container maxWidth="lg" className={classes.pageContainer}>
            <Fab variant="extended" aria-label="subscribe" className={classes.fab} href={'#open-modal'}>
                <AddAlertRoundedIcon className={classes.extendedIcon}/>
                <span>Subscribe to our channel!</span>
            </Fab>
            <IframeModal/>
        </Container>
    );
}
