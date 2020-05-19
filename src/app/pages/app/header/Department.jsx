import React from "react";
import {Link} from "react-router-dom";

export const Department = () => (
    <>
        <div className='sub-header'>
            <Link to='/'>
                <div className='sub-header-link'>Community Feedback</div>
            </Link>
            <div style={{minWidth: '50%', padding: 10}}>
            </div>
        </div>
    </>
);
