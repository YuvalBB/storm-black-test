import React from 'react';
import './IframeModalContent.css';
import Frame from "../Frame/Frame";
import Button from "@material-ui/core/Button";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Link} from "react-router-dom";
import uuid from 'uuid';
import find from 'lodash.find';
import findIndex from 'lodash.findindex';
import SelectedChips from "../SelectedChipsNoAggregate/SelectedChips";
import useStyles from "./IframeModalContentMakeStyles";
import names from "./MockData";

let newItemFromInput = {key: uuid.v4(), name: ''};

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

export default function IframeModalContent() {
    const theme = useTheme();
    const classes = useStyles();
    const [filterValue, setFilterValue] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState([]);

    const INITIAL_CONTENT = `<!DOCTYPE html>
    <html class="iframe-full-dimensions"><head>${document.head.innerHTML}</head>
    <body class="iframe-full-dimensions iframe-body">
    <IframeModalContent/></body></html>`;

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function saveSelectedItem() {
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }

    function setNewItemFromInput(value) {
        const indexInNames = findIndexByKey(names, newItemFromInput.key);
        const indexInSelected = findIndexByKey(selectedItems, newItemFromInput.key);

        if (indexInNames > -1 && indexInSelected === -1) {
            names[indexInNames].name = value;
        } else {
            newItemFromInput = {key: uuid.v4(), name: value};
            names.unshift(newItemFromInput);
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

    function blockEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleSelectChange(e) {
        setSelectedItems(e.target.value);
    }

    function handleInputChange(e) {
        blockEvent(e);
        setFilterValue(e.target.value);
        setNewItemFromInput(e.target.value);
    }

    function handleInputKeyDown(e) {
        if (e.keyCode === 13) {
            addToSelectedItems(newItemFromInput.key);
        }
        e.stopPropagation();
    }

    return (
        <Frame className="modal-window iframe-modal" initialContent={INITIAL_CONTENT}>
            <FormControl className={`${classes.formControl} select-input-container`}>
                <InputLabel htmlFor="select-multiple-chip">Please Select Names:</InputLabel>
                <Select multiple
                        className={classes.specialSelect}
                        value={selectedItems}
                        onChange={handleSelectChange}
                        IconComponent={() => null}
                        input={<Input id="select-multiple-chip"/>}
                        renderValue={
                            selected => (
                                <div className={classes.chips + ' chips-container'}>
                                    <SelectedChips selected={selected} onDelete={deleteFromSelectedItems.bind(this)}/>
                                </div>)}>
                    {[(
                        <div key="input-container">
                            <input className="select-filter-input"
                                   value={filterValue}
                                   placeholder="Filter"
                                   onChange={handleInputChange}
                                   onClick={blockEvent}
                                   onKeyDown={handleInputKeyDown}/>
                        </div>)]
                        .concat(filterHelper(names, filterValue).map(item => (
                            item.name ?
                                <MenuItem key={item.key} value={item} style={getStyles(item, selectedItems, theme)}>
                                    <span>{item.name}</span>
                                </MenuItem> : null
                        )))}
                </Select>
            </FormControl>

            <FormControl className={`${classes.formControl} submit-btn-container`}>
                <Link to='/home' className={classes.navbarLink}>
                    <Button onClick={saveSelectedItem} variant="contained" color="primary" className={classes.button}>
                        <span>Submit</span>
                        <SendRoundedIcon/>
                    </Button>
                </Link>
            </FormControl>
        </Frame>
    );
}
