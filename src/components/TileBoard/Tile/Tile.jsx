import React from 'react';
import classes from './Tile.module.css'

const Tile = ({tileNum, top, left, id, about}) => {
    return (
        <div className={classes.Tile}
             id={id}
             about={about}
             style={{top: top, left: left}}>
                {tileNum}
        </div>
    );
};

export default Tile;
