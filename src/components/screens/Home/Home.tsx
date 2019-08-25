import React, {useEffect} from 'react';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import {NavLink} from 'react-router-dom';

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
        textDecoration: 'none'
    },
}));

// @ts-ignore
export default function Home() {
    const classes = useStyles();
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems') as string);

    useEffect(() => {
        document.title = 'Home';
    }, []);
    return (
        <Container maxWidth="lg">
            {
                selectedItems ? <Typography variant="h5" gutterBottom>
                        User had subscribed to: {selectedItems.map((item: any) => <h6>{item.name}</h6>)}
                    </Typography> :
                    <div>
                        <Typography variant="h4" gutterBottom>
                            Hey There!
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Welcome to the <strong>Storm Black React Test.</strong>
                        </Typography>
                    </div>
            }

            <NavLink to='/subscribe' className={classes.navLink}>
                <Fab variant="extended" aria-label="go-to-subscribe" className={classes.fab}>
                    <ArrowForwardRoundedIcon className={classes.extendedIcon}/>
                    <span>Go to subscription page</span>
                </Fab>
            </NavLink>
        </Container>
    );
}
