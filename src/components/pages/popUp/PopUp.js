import React from "react";

export const PopUp = ({onClick, header, text}) => {
    return (
        <div className='pop-up-wrapper'>
            <div className='pop-up-content'>
                <i className="fa fa-times fa-2x cross" aria-hidden="true" onClick={onClick}>
                </i>
                <div className='pop-up-header'>{header}</div>
                <div className='pop-up-text'>{text}</div>
            </div>
        </div>
    )
};