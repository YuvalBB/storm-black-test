import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';
import IframeModal from '../../IframeModalContent/IframeModalContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from '../Home/SubscribeMaterialStyles';

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
