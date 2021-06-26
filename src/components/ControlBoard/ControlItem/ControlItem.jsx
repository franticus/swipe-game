import React from 'react';
import classes from './ConrtolItem.module.css'

const ControlItem = ({arrow, top, left}) => {
    return (
        <div className={classes.ControlItem}
             style={{top: top, left: left}}>
            {arrow}
        </div>
    );
};

export default ControlItem;
