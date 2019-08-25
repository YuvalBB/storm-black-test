import React from 'react';
import map from 'lodash.map';
import './SelectedChips.css';
import {Chip} from '@material-ui/core';

export default function SelectedChips(props: any) {
    return (
        <div className="selected-chips-container">
            {map(props.selected, (item: { key: string, name: string }) =>
                <Chip key={item.key} id={item.key}
                      label={item.name}
                      clickable={true}
                      onDelete={() => props.onDelete(item.key)}/>)}
        </div>);
}
