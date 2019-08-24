import React, {useState, createContext} from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const data = [
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

const SpecialInput = ({children, ...props}) => {
    props.selectedData = data;
    return (
        <div>
            {[(
                <MenuItem style={{background: 'transparent'}}>
                    <input
                        placeholder="Filter"
                        onChange={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            this.setState({filter: e.target.value});
                        }}
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    />
                </MenuItem>
            )].concat(data.map(name => (
                <MenuItem
                    key={name}
                    value={name}
                    style={{
                        background: 'white',
                        marginRight: '10px'
                    }}
                >
                    <ListItemText primary={name}/>
                </MenuItem>
            )))}
        </div>
    )
}

export default SpecialInput;
