import React from 'react';
import classes from './ScoreCounter.module.css'

const ScoreCounter = ({counter, time}) => {
    return (
        <div className={classes.ScoreCounter}>
            <span className={classes.counter}>Count: {counter}</span>
            <span className={classes.time}>Time: {time}</span>
        </div>
    );
};

export default ScoreCounter;
