import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        flex: 2
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        alignItems: 'center',
        '& div.MuiChip-root': {
            background: '#ccc',
            padding: '10px',
            color: 'rgba(0, 0, 0, 0.87)',
            border: 'none',
            cursor: 'default',
            height: '32px',
            display: 'inline-flex',
            outline: '0',
            fontSize: '1rem',
            boxSizing: 'border-box',
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            alignItems: 'center',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            whiteSpace: 'nowrap',
            borderRadius: '16px',
            verticalAlign: 'middle',
            justifyContent: 'center',
            textDecoration: 'none',
            backgroundColor: '#e0e0e0',
        }
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    specialSelect: {
        height: '50px',
        display: 'flex',
        borderRadius: '5px',
        border: '1px solid #c1c1c1',
        '& div.MuiSelect-root': {
            flex: 1
        },
        '& div.MuiSelect-root:hover': {
            cursor: 'pointer'
        }
    },
    flexCenter: {
        display: 'flex',
        alignContent: 'center'
    },
    navbarLink: {
        textDecoration: 'none'
    },
}));

export default useStyles;
