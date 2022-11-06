// import React from 'react';

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; //configuring to accept external classes being passed to card component
    return(
        <div className={classes}>{props.children}</div>//accessing and inserting all the children components passed between <Card></Card> in ExpenseItem.js here
    );
}

export default Card;