import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';
import IframeModal from '../../IframeModalContent/IframeModalContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="lg" className={classes.pageContainer}>
            <Fab variant="extended" aria-label="subscribe" className={classes.fab} onClick={handleOpen}>
                <AddAlertRoundedIcon className={classes.extendedIcon}/>
                <span>Subscribe to our channel!</span>
            </Fab>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}>
                <Fade in={open}>
                    <IframeModal/>
                </Fade>
            </Modal>
        </Container>
    );
}
