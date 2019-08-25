import React from 'react';
import Typography from '@material-ui/core/Typography';
import './SubscriptionInfo.css';

/**
 * @return {null}
 */

export default function SubscriptionInfo(props) {
    return (
        props.selectedItems && props.selectedItems.length > 0 ?
            <Typography className="subscription-info-container" variant="h5" gutterBottom>
                <span>User Had Subscribed To:</span>
                <ul className="subscription-list-container">
                    {props.selectedItems.map((item) => <li key={item.key}>{item.name}</li>)}
                </ul>
            </Typography> : null
    );
}
