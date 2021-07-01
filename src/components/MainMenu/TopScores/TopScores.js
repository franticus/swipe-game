import React from 'react';
import classes from './TopScores.module.css'

const scoresArr = []

const TopScores = () => {

    const raw = localStorage.getItem('topScores')
    const user = JSON.parse(raw)

    console.log(user[0].name)

    scoresArr.unshift({name: user[0].name, scores: user[0].scores})

    return (
        <div className={classes.TopScores}>
            <p className={classes.top}>Top 10 Scores</p>
            <ul>
                <li>1. {user[0].name} - {user[0].scores}</li>
            </ul>
        </div>
    );
};

export default TopScores;
