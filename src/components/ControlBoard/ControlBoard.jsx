import React from 'react';
import classes from './ControlBoard.module.css'
import Tile from "../TileBoard/Tile/Tile";

const controls = [
    {type: '<', x: '0px', y: '50px', id: 37},
    {type: '˄', x: '50px', y: '0px', id: 38},
    {type: '>', x: '100px', y: '50px', id: 39},
    {type: '˅', x: '50px', y: '100px', id: 40},
]

const ControlBoard = ({onClick}) => {

    return (
        <div className={classes.ControlBoard}>
            {controls.map((tile, index) => (
                <Tile key={index}
                      top={tile.y}
                      onClick={onClick}
                      left={tile.x}
                      id={tile.id}
                      tileNum={tile.type}/>))}
        </div>
    );
};

export default ControlBoard;
