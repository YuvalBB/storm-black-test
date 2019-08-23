import React from 'react';
import logo from '../../assets/img/logo.png';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddAlertRoundedIcon from '@material-ui/icons/AddAlertRounded';

import './Navbar.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: '5%'
    },
    title: {
        flexGrow: 1,
    },
    button: {
        '&:hover': {
            color: 'white',
            backgroundColor: '#ff5722'
        },
        '& span': {
            paddingRight: '3px'
        },
        margin: theme.spacing(1),
        backgroundColor: 'white',
        color: '#ff5722',
        textDecoration: 'inherit'
    },
    navbarLink: {
        color: 'inherit',
        textDecoration: 'none'
    },
    navbarLinkActive: {
        '& button': {
            color: 'white',
            backgroundColor: '#ff5722'
        }
    },
    navbarIcon: {
        marginRight: '5px'
    }
}));

const Navbar: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <Typography variant='h6' className={classes.title}>
                        Storm Black Test
                    </Typography>
                    <div>
                        <NavLink to='/home' className={classes.navbarLink} activeClassName={classes.navbarLinkActive}>
                            <Button variant='outlined' className={classes.button}>
                                <HomeRoundedIcon className={classes.navbarIcon}/>
                                <span>Home</span>
                            </Button>
                        </NavLink>
                        <NavLink to='/subscribe' className={classes.navbarLink}
                                 activeClassName={classes.navbarLinkActive}>
                            <Button variant='outlined' className={classes.button}>
                                <AddAlertRoundedIcon className={classes.navbarIcon}/>
                                <span>Subscribe</span>
                            </Button>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
