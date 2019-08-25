import React from 'react';
import '../IframeModalContent/IframeModalContent.css';
import {useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import uuid from 'uuid';
import findIndex from 'lodash.findindex';
import SelectedChips from "../SelectedChipsNoAggregate/SelectedChips";
import {useStyles, getStyles} from "../IframeModalContent/IframeModalContentMaterialStyles";

let newItemFromInput = {key: uuid.v4(), name: ''};

export default function StormBlackSelect(props) {
    const theme = useTheme();
    const classes = useStyles();
    const [filterValue, setFilterValue] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState([]);

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function setNewItemFromInput(value) {
        const indexInOptions = findIndexByKey(props.options, newItemFromInput.key);
        const indexInSelected = findIndexByKey(selectedItems, newItemFromInput.key);

        if (indexInOptions > -1 && indexInSelected === -1) {
            props.options[indexInOptions].name = value;
        } else {
            newItemFromInput = {key: uuid.v4(), name: value};
            props.options.unshift(newItemFromInput);
        }
    }

    function addToSelectedItems(key) {
        const index = props.options[findIndexByKey(props.options, key)];
        selectedItems.push(index);
        setSelectedItems(selectedItems);
        props.setSelectedItems(selectedItems);
        forceUpdate();
    }

    function deleteFromSelectedItems(key) {
        const index = findIndexByKey(selectedItems, key);
        selectedItems.splice(index, 1);
        setSelectedItems(selectedItems);
        props.setSelectedItems(selectedItems);
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
        props.setSelectedItems(e.target.value);
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
                    .concat(filterHelper(props.options, filterValue).map(item => (
                        item.name ?
                            <MenuItem key={item.key} value={item} style={getStyles(item, selectedItems, theme)}>
                                <span>{item.name}</span>
                            </MenuItem> : null
                    )))}
            </Select>
        </FormControl>
    );
}
