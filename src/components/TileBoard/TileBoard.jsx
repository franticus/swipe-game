import React from 'react';
import classes from './TileBoard.module.css'
import Tile from "./Tile/Tile";
import SwipeItem from "../SwipeItem/SwipeItem";

class TileBoard extends React.Component {

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    swipesRandomArr = Array(100).fill().map(() => Math.round(this.randomInteger(1, 4)))
    tiles = [
        {id: 1, x: '0px', y: '100px'},
        {id: 2, x: '100px', y: '0px'},
        {id: 3, x: '200px', y: '100px'},
        {id: 4, x: '100px', y: '200px'},
    ]

    state = {
        swipesArr: this.swipesRandomArr,
        swipesCopyArr: [...this.swipesRandomArr],
        isStarted: false
    }



    startTimer = () => {
        setInterval(() => {
            this.props.setTime(this.props.time - 1)
            if (!this.props.time) {
                this.setState({

                })
                clearInterval(this.startTimer)
            }
        }, 1000)
    }


    componentDidMount() {
        document.addEventListener('keydown', this.onKeyHandler)
    }

    onClickHandler = (e) => {
        console.log(e.target)
        switch (e.target.id) {
            case '1':
                return e.target.style.left = '0px'
            case '2':
                return e.target.style.top = '0px'
            case '3':
                return e.target.style.left = '200px'
            case '4':
                return e.target.style.top = '200px'
            default:
                console.log('def')
        }
    }


    isMatch = (number) => {
        let arr = [...this.state.swipesArr]
        const swipesFirstArr = document.querySelectorAll('.first')
        const swipesSecondArr = document.querySelectorAll('.second')
        let swipeFirstId = swipesFirstArr[swipesFirstArr.length - 1]
        let swipeSecondId = swipesSecondArr[arr.length - 1]
        if (swipeFirstId.id === number) {
            this.props.setCounter(this.props.counter + 1)
            swipeSecondId.style.backgroundColor = 'green'
        } else {
            this.setState({
                counter: this.state.counter - 1
            })
            swipeSecondId.style.backgroundColor = 'red'
        }
    }


    onKeyHandler = (e) => {
        if (!this.state.isStarted) {
            this.startTimer()
        }
        let arr = [...this.state.swipesArr]
        const swipesSecondArr = document.querySelectorAll('.second')
        let swipeSecondId = swipesSecondArr[arr.length - 1]
        switch (e.which) {
            case 37:
                this.isMatch('1')
                swipeSecondId.style.left = '0px'
                arr.pop()
                return this.setState({
                    swipesArr: arr,
                })
            case 38:
                this.isMatch('2')
                swipeSecondId.style.top = '0px'
                arr.pop()
                return this.setState({
                    swipesArr: arr
                })
            case 39 :
                this.isMatch('3')
                swipeSecondId.style.left = '200px'
                arr.pop()
                return this.setState({
                    swipesArr: arr
                })
            case 40 :
                this.isMatch('4')
                swipeSecondId.style.top = '200px'
                arr.pop()
                return this.setState({
                    swipesArr: arr
                })
            default:
                return arr
        }
    }


    render() {
        return (
            <>
                <div className={classes.TileBoard}>
                    {this.tiles.map((tile, index) => (
                        <Tile key={index}
                              id={tile.id}
                              top={tile.y}
                              left={tile.x}
                              tileNum={tile.id}/>))}
                    {this.state.swipesArr.map((e, index) => (
                            <SwipeItem swiperNum={this.state.swipesArr[index]}
                                       key={index}
                                       active={'first'}
                                       onKeySwipe={this.onKeyHandler}
                                       onSwipe={this.onClickHandler}/>
                        )
                    )}
                    {this.state.swipesCopyArr.map((e, index) => (
                            <SwipeItem swiperNum={this.state.swipesArr[index]}
                                       key={index}
                                       active={'second'}
                                       onKeySwipe={this.onKeyHandler}
                                       onSwipe={this.onClickHandler}/>
                        )
                    )}
                </div>
            </>
        )
    }
}

export default TileBoard;
