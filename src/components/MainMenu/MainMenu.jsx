import React from 'react';
import classes from './MainMenu.module.css'

const MainMenu = () => {
    return (
        <div className={classes.MainMenu}>
            <ul className={classes.list}>
                <li>Start Game</li>
                <li>Info</li>
                <li>Settings</li>
                <li>Exit</li>
            </ul>
        </div>
    );
};

export default MainMenu;
