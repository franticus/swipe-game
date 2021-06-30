import React from 'react';
import classes from './Tile.module.css'

const Tile = ({tileNum, top, left, id}) => {
    return (
        <div className={classes.Tile}
             id={id}
             style={{top: top, left: left}}>
            {tileNum}
        </div>
    );
};

export default Tile;
