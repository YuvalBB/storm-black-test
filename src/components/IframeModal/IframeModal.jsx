import React from 'react';
import './IframeModal.css';
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
import {Link} from "react-router-dom";
import uuid from 'uuid';
import filter from 'lodash.filter';
import find from 'lodash.find';
import findIndex from 'lodash.findindex';

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
        justifyContent: 'center'
    },
    navbarLink: {
        textDecoration: 'none'
    },
}));

let newOption = {key: uuid.v4(), name: ''};

let names = [
    {key: 0, name: ''}, // Empty slot for new input from filter
    {key: 1, name: 'Oliver Hansen'},
    {key: 2, name: 'Van Henry'},
    {key: 3, name: 'April Tucker'},
    {key: 4, name: 'Ralph Hubbard'},
    {key: 5, name: 'Omar Alexander'},
    {key: 6, name: 'Carlos Abbott'},
    {key: 7, name: 'Miriam Wagner'},
    {key: 8, name: 'Bradley Wilkerson'},
    {key: 9, name: 'Virginia Andrews'},
    {key: 10, name: 'Kelly Snyder'},
];

function getStyles(item, selectedItems, theme) {
    return {
        fontWeight:
            find(selectedItems, {name: item.name})
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
        width: '50%',
        padding: '5px 0',
        borderBottom: '1px solid #ccc'
    };
}

export default function UVModal() {
    const theme = useTheme();
    const classes = useStyles();
    const [filterValue, setFilterValue] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState([]);
    const INITIAL_CONTENT = `<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body><div></div></body></html>`;

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function handleChange(e) {
        setSelectedItems(e.target.value);
    }

    function addNewOption() {

    }

    function saveSelectedItem() {
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }

    function setNewOption(value) {
        const indexInNames = findIndexByKey(names, newOption.key);
        const indexInSelected = findIndexByKey(selectedItems, newOption.key);

        if (indexInNames > -1 && indexInSelected === -1) {
            names[indexInNames].name = value;
        } else {
            newOption = {key: uuid.v4(), name: value};
            names.unshift(newOption);
        }
    }

    function addToSelectedItems(key) {
        const index = names[findIndexByKey(names, key)];
        selectedItems.push(index);
        setSelectedItems(selectedItems);
        forceUpdate();
    }

    function deleteFromSelectedItems(key) {
        const index = findIndexByKey(selectedItems, key);
        selectedItems.splice(index, 1);
        setSelectedItems(selectedItems);
        forceUpdate();
    }

    function findIndexByKey(array, key) {
        return findIndex(array, item => item.key === key)
    }

    function filterHelper(array, query) {
        return query ? array.filter(item => eval('/' + query + '/').test(item.name)) : array;
    }

    return (
        <NoSsr>
            <Frame id="open-modal" className="modal-window iframe-modal" initialContent={INITIAL_CONTENT}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">Please Select Names:</InputLabel>
                    <Select
                        multiple
                        className={classes.specialSelect}
                        value={selectedItems}
                        onChange={handleChange}
                        input={
                            <Input id="select-multiple-chip"/>
                        }
                        renderValue={
                            selected => (
                                <div className={classes.chips}>
                                    {
                                        selected.map((value, index) => (
                                            <Chip key={value.key} label={value.name} clickable={true}
                                                  className={classes.chip}
                                                  onDelete={() => {
                                                      deleteFromSelectedItems(value.key);
                                                  }}/>))
                                    }
                                </div>
                            )
                        }>
                        {[(
                            <div key="input-container">
                                <input
                                    className="select-filter-input"
                                    value={filterValue}
                                    placeholder="Filter"
                                    onChange={e => {
                                        setFilterValue(e.target.value);
                                        setNewOption(e.target.value);
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onKeyDown={e => {
                                        if (e.keyCode === 13) {
                                            addToSelectedItems(newOption.key);
                                        }
                                        e.stopPropagation();
                                    }}
                                />
                            </div>
                        )].concat(filterHelper(names, filterValue).map(item => (
                            item.name ?
                                <MenuItem key={item.key} value={item}
                                          style={getStyles(item, selectedItems, theme)}>
                                    <span>{item.name}</span>
                                </MenuItem> : null
                        )))}
                    </Select>
                </FormControl>

                <FormControl className={classes.flexCenter}>
                    <Link to='/home' className={classes.navbarLink}>
                        <Button onClick={saveSelectedItem} variant="contained" color="primary"
                                className={classes.button}>
                            <span>Submit</span>
                            <SendRoundedIcon/>
                        </Button>
                    </Link>
                </FormControl>
            </Frame>
        </NoSsr>
    );
}
