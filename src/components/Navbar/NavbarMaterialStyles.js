import {makeStyles} from "@material-ui/core";

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

export default useStyles;
