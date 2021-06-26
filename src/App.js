import React, {useState} from 'react'
import './index.css'
import TileBoard from "./components/TileBoard/TileBoard";
// import ControlBoard from "./components/ControlBoard/ControlBoard";
import ScoreCounter from "./components/ScoreCounter/ScoreCounter";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {

    const [counter, setCounter] = useState(0)
    const [time, setTime] = useState(10)

    return (
        <div className="App">
            <h1>Swipe Game</h1>
            <ScoreCounter counter={counter}
                          time={time}/>

            <MainMenu/>
            <TileBoard setCounter={setCounter}
                       counter={counter}
                       time={time}
                       setTime={setTime}
            />
            {/*<ControlBoard/>*/}
        </div>
    );
}

export default App;
