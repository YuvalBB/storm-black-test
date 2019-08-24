import React, {useState} from 'react';
import './IframeModal.css';
import NewFrame from '../NewFrame/NewFrame';
import Frame from "../Frame/Frame";
import Button from "@material-ui/core/Button";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import NoSsr from '@material-ui/core/NoSsr';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(1),
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
    testSelect: {
        height: '50px',
        display: 'flex',
        borderRadius: '5px',
        border: '1px solid #c1c1c1',
        '& div.MuiSelect-root': {
            flex: 1
        }
    }
}));

const MenuProps = {
    PaperProps: {
        style: {
            '& ul': {
                color: 'red'
            }
        },
    }
};

let names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        width: '50%',
        padding: '5px 0',
        borderBottom: '1px solid #ccc'
    };
}

export default function UVModal() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [filterValue, setFilterValue] = React.useState('');

    function handleChange(event) {
        setPersonName(event.target.value);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen(e) {
        setOpen(true);
    }

    function handleChangeMultiple(event) {
        const {options} = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    }

    function filterHelper(array, query) {
        return query ? array.filter(item => {
            return eval('/' + query + '/').test(item);
        }) : array;
    }

    const initialContent = `<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body><div></div></body></html>`;

    return (
        <NoSsr>
            <Frame id="open-modal" className="modal-window" initialContent={initialContent}>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-chip">Please Select Names:</InputLabel>
                        <Select
                            multiple
                            open={open}
                            className={classes.testSelect}
                            value={personName}
                            onChange={handleChange}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            input={
                                <Input id="select-multiple-chip"/>
                            }
                            renderValue={
                                selected => (
                                    <div className={classes.chips}>
                                        {
                                            selected.map((value, index) => (
                                                <Chip key={value} label={value} className={classes.chip}/>))
                                        }
                                    </div>
                                )
                            }
                            MenuProps={MenuProps}>
                            {[(
                                <div style={{background: 'transparent'}}>
                                    <input
                                        value={filterValue}
                                        placeholder="Filter"
                                        onChange={e => {
                                            setFilterValue(e.target.value);
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onClick={
                                            e => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }
                                        onKeyDown={e => {
                                            e.stopPropagation();
                                        }}
                                    />
                                </div>
                            )].concat(filterHelper(names, filterValue).map(name => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                    {name}
                                </MenuItem>
                            )))}
                        </Select>
                    </FormControl>

                    <FormControl style={{display: 'flex', justifyContent: 'center'}}>
                        <NavLink to='/home' className={classes.navbarLink}>
                            <Button variant="contained" color="primary" className={classes.button}>
                                <span>Submit</span>
                                <SendRoundedIcon/>
                            </Button>
                        </NavLink>
                    </FormControl>
                </div>
            </Frame>
        </NoSsr>
    );
}
