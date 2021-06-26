import React from 'react';
import classes from './Tile.module.css'

const Tile = ({tileNum, top, left}) => {
    return (
        <div className={classes.Tile}
             style={{top: top, left: left}}>
            {tileNum}
        </div>
    );
};

export default Tile;
