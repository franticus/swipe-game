import React from 'react';
import classes from './SwipeItem.module.css'

const SwipeItem = ({swiperNum, onSwipe, onKeySwipe, active}) => {
    return (
        <div className={`${classes.SwipeItem} ${active}`} id={swiperNum}
             onClick={onSwipe}
             tabIndex="0"
             onKeyDown={onKeySwipe}>
            {swiperNum}
        </div>
    );
};

export default SwipeItem;
