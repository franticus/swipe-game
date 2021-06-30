import React, {useState} from 'react'
import './index.css'
import ScoreCounter from "./components/ScoreCounter/ScoreCounter";
// import MainMenu from "./components/MainMenu/MainMenu";
import TileBoard from "./components/TileBoard/TileBoard";
// import ControlBoard from "./components/ControlBoard/ControlBoard";

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

    return (
        <div className="App">
            <h1>Swipe Game</h1>
            {/*<MainMenu/>*/}
            <ScoreCounter time={time}
                          setTime={setTime}
                          counter={counter}
                          setCounter={setCounter}
                          isStarted={isStarted}
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
            />
            {/*<ControlBoard swipesArr={swipesArr}*/}
            {/*              setSwipesArr={setSwipesArr}*/}
            {/*              isStarted={isStarted}*/}
            {/*              setIsStarted={setIsStarted}*/}
            {/*              swipesCopyArr={swipesCopyArr}*/}
            {/*              setSwipesCopyArr={setSwipesCopyArr}/>*/}
        </div>
    );
}

export default App;
