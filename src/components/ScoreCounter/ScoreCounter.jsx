import React, {useEffect} from 'react';
import classes from './ScoreCounter.module.css'

const ScoreCounter = ({counter, time, setTime, isStarted, setIsStarted}) => {

    useEffect(() => {
        const interval = setInterval(() => {
            if (isStarted) {time > 0 ? setTime(time - 1) : clearInterval(interval)}
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [time, setTime, isStarted]);

    return (
        <div className={classes.ScoreCounter}>
            <span className={classes.counter}>Count: {counter}</span>
            <span className={classes.time}>Time: {time}</span>
        </div>
    );
};

export default ScoreCounter;
