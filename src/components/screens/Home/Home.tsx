import React, {useEffect} from 'react';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import {NavLink} from 'react-router-dom';
import SubscriptionInfo from './SubscriptionInfo/SubscriptionInfo';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {Button} from '@material-ui/core';
import SUBSCRIPTIONS_LOCALSTORAGE_KEY from '../../../constants/constants';

const useStyles = makeStyles(theme => ({
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
        textDecoration: 'none',
        width: 'max-content'
    },
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    btnsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '10rem'
    },
    clearSubBtn: {
        color: 'white',
        backgroundColor: '#dd2c00',
        fontSize: '12px',
        '&:hover': {
            backgroundColor: '#ff3d00'
        }
    }
}));

export default function Home() {
    const classes = useStyles();
    // @ts-ignore
    const selectedItems = JSON.parse(localStorage.getItem(SUBSCRIPTIONS_LOCALSTORAGE_KEY) as string);
    const areThereSubscriptions = selectedItems && selectedItems.length > 0;

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        document.title = 'Home';
    }, []);

    function clearSubscriptions() {
        // @ts-ignore
        localStorage.removeItem(SUBSCRIPTIONS_LOCALSTORAGE_KEY);
        forceUpdate();
    }

    return (
        <Container maxWidth="md" className="home-container">
            {
                areThereSubscriptions ?
                    <SubscriptionInfo selectedItems={selectedItems}/> :
                    <WelcomeMessage/>
            }
            <div className={classes.btnsContainer}>
                <NavLink to='/subscribe' className={classes.navLink}>
                    <Fab variant="extended" aria-label="go-to-subscribe" className={classes.fab}>
                        <ArrowForwardRoundedIcon className={classes.extendedIcon}/>
                        <span>Go to subscription page</span>
                    </Fab>
                </NavLink>
                {areThereSubscriptions ?
                    <Button variant="contained" className={`${classes.button} ${classes.clearSubBtn}`}
                            onClick={clearSubscriptions}>
                        <DeleteRoundedIcon className={classes.leftIcon}/>
                        <span>Clear Subscriptions</span>
                    </Button> : null}
            </div>
        </Container>
    );
}
