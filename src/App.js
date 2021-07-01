import React, {useState} from 'react'
import './index.css'
import ScoreCounter from "./components/ScoreCounter/ScoreCounter";
import TileBoard from "./components/TileBoard/TileBoard";
import Auth from "./components/Auth/Auth";

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
const swipesRandomArr = Array(100).fill().map(() =>
    Math.round(randomInteger(1, 4)))


const App = () => {

    const [counter, setCounter] = useState(0)
    const [time, setTime] = useState(10)
    const [swipesArr, setSwipesArr] = useState(swipesRandomArr)
    const [swipesCopyArr, setSwipesCopyArr] = useState(swipesRandomArr)
    const [isStarted, setIsStarted] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [name, setName] = useState('')

    const [topScores, setTopScores] = useState([])

    return (
        <div className="App">
            <h1>Swipe Game</h1>
            {!isLogin && <Auth isLogin={isLogin}
                               name={name}
                               setName={setName}
                               setIsLogin={setIsLogin}
            />}
            <ScoreCounter time={time}
                          setTime={setTime}
                          counter={counter}
                          setCounter={setCounter}
                          isStarted={isStarted}
                          setIsStarted={setIsStarted}
                          setIsFinished={setIsFinished}
                          isFinished={isFinished}
            />
            <TileBoard counter={counter}
                       setCounter={setCounter}
                       time={time}
                       setTime={setTime}
                       swipesArr={swipesArr}
                       setSwipesArr={setSwipesArr}
                       swipesCopyArr={swipesCopyArr}
                       setSwipesCopyArr={setSwipesCopyArr}
                       isStarted={isStarted}
                       setIsStarted={setIsStarted}
                       setIsFinished={setIsFinished}
                       isFinished={isFinished}
                       name={name}
                       setName={setName}
                       setIsLogin={setIsLogin}
                       topScores={topScores}
                       setTopScores={setTopScores}
            />
        </div>
    );
}

export default App;
