import React from "react";
import Typography from "@material-ui/core/Typography";
import './WelcomeMessage.css';

export default function WelcomeMessage() {
    return (
        <div className="welcome-message-container">
            <Typography variant="h4" gutterBottom>
                Hey There!
            </Typography>
            <Typography variant="h5" gutterBottom>
                Welcome to the <strong>Storm Black React Test.</strong>
            </Typography>
        </div>
    );
}
