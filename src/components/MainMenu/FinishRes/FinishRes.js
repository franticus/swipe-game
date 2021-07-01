import React from 'react';
import classes from './FinishRes.module.css'

const topScoresArray = []

const FinishRes = ({counter, setCounter, time, setTime, setIsStarted, setIsFinished, name}) => {

    const playAgainHandler = () => {

        topScoresArray.unshift({name: name, scores: counter})
        localStorage.setItem('topScores', JSON.stringify(topScoresArray))

        setIsStarted(false)
        setIsFinished(false)
        setTime(10)
        setCounter(0)
    }

    return (
        <div className={classes.FinishRes}>
            <p className={classes.top}>Game Over</p>
            <p className={classes.text}>
                {name}
                <br/>
                Your Score:
                <br/>
                {counter}
                <br/>
                Time:
                <br/>
                {time + 10}
                <br/> <br/>
                <span className={classes.againBtn}
                      onClick={playAgainHandler}
                >Play Again!</span>
            </p>
        </div>
    );
};

export default FinishRes;
