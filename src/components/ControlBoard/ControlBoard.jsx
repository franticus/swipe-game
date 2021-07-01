import React from 'react';
import classes from './ControlBoard.module.css'
import ControlItem from "./ControlItem/ControlItem";

const controls = [
    {type: '⇐', x: '0px', y: '70px', id: 37},
    {type: '⇑', x: '70px', y: '0px', id: 38},
    {type: '⇒', x: '140px', y: '70px', id: 39},
    {type: '⇓', x: '70px', y: '140px', id: 40},
]

const ControlBoard = ({onClick}) => {

    return (
        <div className={classes.ControlBoard}>
            {controls.map((tile, index) => (
                <ControlItem key={index}
                             top={tile.y}
                             onClick={onClick}
                             left={tile.x}
                             id={tile.id}
                             arrow={tile.type}/>))}
        </div>
    );
};

export default ControlBoard;
