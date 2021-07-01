import React, {useEffect} from 'react';
import classes from './ScoreCounter.module.css'

const ScoreCounter = ({counter, time, setTime, isStarted, setIsStarted,setIsFinished}) => {

    useEffect(() => {
        const interval = setInterval(() => {
            if (isStarted) {
                time > 0
                    ? setTime(time - 1)
                    : clearInterval(interval)
            }
        }, 1000);
        if (time === 0) {
            setIsStarted(false)
            setIsFinished(true)
        }
        return () => {
            clearInterval(interval);
        };
    }, [time, setTime, isStarted, setIsStarted, setIsFinished]);

    return (
        <div className={classes.ScoreCounter}>
            <span className={classes.counter}>Count: {counter}</span>
            <span className={classes.time}>Time: {time}</span>
        </div>
    );
};

export default ScoreCounter;
