import React from 'react';
import './IframeModalContent.css';
import Frame from "../Frame/Frame";
import Button from "@material-ui/core/Button";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import FormControl from '@material-ui/core/FormControl';
import {Link} from "react-router-dom";
import {useStyles} from "./IframeModalContentMaterialStyles";
import names from "./MockData";
import StormBlackSelect from "../StormBlackSelect/StormBlackSelect";

export default function IframeModalContent() {
    const classes = useStyles();
    const [selectedItems, setSelectedItems] = React.useState([]);

    // Dirty workaround I made in order to load app stylesheets into the iframe :(
    const INITIAL_CONTENT = `<!DOCTYPE html>
    <html class="iframe-full-dimensions"><head>${document.head.innerHTML}</head>
    <body class="iframe-full-dimensions iframe-body">
    <IframeModalContent/></body></html>`;

    function saveSelectedItem() {
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }

    return (
        <Frame className="modal-window iframe-modal" initialContent={INITIAL_CONTENT}>
            <StormBlackSelect options={names} setSelectedItems={setSelectedItems.bind(this)}/>
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
