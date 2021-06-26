import React from 'react';
import classes from './ControlBoard.module.css'
import Tile from "../TileBoard/Tile/Tile";

const controls = [
    {type: '<', x: '0px', y: '50px'},
    {type: '˄', x: '50px', y: '0px'},
    {type: '>', x: '100px', y: '50px'},
    {type: '˅', x: '50px', y: '100px'},
]

const ControlBoard = () => {
    return (
        <div className={classes.ControlBoard}>
            {controls.map((tile, index) => (
                <Tile key={index}
                      top={tile.y}
                      left={tile.x}
                      tileNum={tile.type}/>))}
        </div>
    );
};

export default ControlBoard;
