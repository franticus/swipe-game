import React from 'react';
import classes from './ConrtolItem.module.css'

const ControlItem = ({arrow, top, left, id}) => {
    return (
        <div className={classes.ControlItem}
             id={id}
             style={{top: top, left: left}}>
            <div>
                {arrow}
            </div>
        </div>
    );
};

export default ControlItem;
