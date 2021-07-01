import React from 'react';
import classes from './Settings.module.css'

const Settings = () => {

    return (
        <div className={classes.Settings}>
            <p className={classes.top}>Info</p>
            <p className={classes.text}>
                Some settings
                <br/>
                Time: 10s 20s 30s
                <br/>
                Sound: on off
                <br/>
                Theme: light dark
            </p>
        </div>
    );
};

export default Settings;
