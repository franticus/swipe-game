import React from 'react';
import classes from './Info.module.css'

const Info = () => {

    return (
        <div className={classes.Info}>
            <p className={classes.top}>Info</p>
            <p className={classes.text}>
                Sort the numbers by directions
                for a certain time using the arrows
                on the keyboard or by tap on a numbers
                <br/><br/>
               Good Luck =)
            </p>
        </div>
    );
};

export default Info;
