import React, {useEffect} from 'react';
import classes from './TileBoard.module.css'
import Tile from "./Tile/Tile";
import SwipeItem from "../SwipeItem/SwipeItem";
import MainMenu from "../MainMenu/MainMenu";
import FinishRes from "../MainMenu/FinishRes/FinishRes";

const tiles = [
    {id: 1, x: '0px', y: '100px', keyNum: 37},
    {id: 2, x: '100px', y: '0px', keyNum: 38},
    {id: 3, x: '200px', y: '100px', keyNum: 39},
    {id: 4, x: '100px', y: '200px', keyNum: 40},
]

const TileBoard = ({
                       counter, setCounter, swipesArr,
                       isStarted, setIsStarted, time, setTime,
                       setSwipesArr, swipesCopyArr, setIsLogin,
                       isFinished, setIsFinished, name, setName, topScores, setTopScores
                   }) => {
    console.log('Рендер')
    useEffect(() => {
        document.addEventListener('keydown', onKeyHandler)
        document.addEventListener('click', onKeyHandler)
        return () => {
            document.removeEventListener('keydown', onKeyHandler)
            document.removeEventListener('click', onKeyHandler)
        }
    })

    const arr = [...swipesArr]
    const isMatch = (number, arr) => {
        const swipesFirstArr = document.querySelectorAll('.first')
        const swipesSecondArr = document.querySelectorAll('.second')
        let swipeFirstId = swipesFirstArr[swipesFirstArr.length - 1]
        let swipeSecondId = swipesSecondArr[arr.length - 1]
        if (swipeFirstId.id === number) {
            swipeSecondId.style.backgroundColor = 'green'
            setCounter(counter + 1)
        } else {
            swipeSecondId.style.backgroundColor = 'red'
            counter > 0 ? setCounter(counter - 1) : setCounter(0)
        }
    }
    const onKeyHandler = (e) => {
        const swipesSecondArr = document.querySelectorAll('.second')
        let swipeSecondId = swipesSecondArr[arr.length - 1]
        let clickRes = +e.target.innerText + 36
        switch (clickRes || e.which) {
            case 37:
                arr.pop()
                isMatch('1', swipesArr)
                swipeSecondId.style.left = '0px'
                return setSwipesArr(arr)
            case 38:
                arr.pop()
                isMatch('2', swipesArr)
                swipeSecondId.style.top = '0px'
                return setSwipesArr(arr)
            case 39 :
                arr.pop()
                isMatch('3', swipesArr)
                swipeSecondId.style.left = '200px'
                return setSwipesArr(arr)
            case 40 :
                arr.pop()
                isMatch('4', swipesArr)
                swipeSecondId.style.top = '200px'
                return setSwipesArr(arr)
            default:
                return arr
        }
    }

    return (
        <>
            {!isStarted &&
            <MainMenu isStarted={isStarted}
                      counter={counter}
                      name={name}
                      setName={setName}
                      setIsLogin={setIsLogin}
                      setIsFinished={setIsFinished}
                      setIsStarted={setIsStarted}
                      topScores={topScores}
            />}
            <div className={classes.TileBoard}>
                {tiles.map((tile, index) => (
                    <Tile key={index}
                          id={tile.id}
                          about={tile.keyNum}
                          top={tile.y}
                          left={tile.x}
                          onClick={(event) => onKeyHandler(event)}
                          tileNum={tile.id}/>))}
                {swipesArr.map((el, index) => (
                        <SwipeItem swiperNum={swipesArr[index]}
                                   key={index}
                                   active={'first'}
                                   onKeySwipe={(event) => onKeyHandler(event.which)}
                        />
                    )
                )}
                {swipesCopyArr.map((el, index) => (
                        <SwipeItem swiperNum={swipesCopyArr[index]}
                                   key={index}
                                   active={'second'}
                                   onKeySwipe={(event) => onKeyHandler(event.which)}
                        />
                    )
                )}
            </div>
            {isFinished && <FinishRes counter={counter}
                                      setCounter={setCounter}
                                      time={time}
                                      name={name}
                                      setTime={setTime}
                                      setIsStarted={setIsStarted}
                                      setIsFinished={setIsFinished}
                                      topScores={topScores}
                                      setTopScores={setTopScores}
            />}
            {/*<button>Menu</button>*/}
            {/*<ControlBoard onClick={(event) => onKeyHandler(event.target.id)}/>*/}
        </>
    )
}

export default React.memo(TileBoard)