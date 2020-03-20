import React from "react";
import {Link} from "react-router-dom";
import {Auth} from "../../../../helpers/auth/Auth";

export const Department = () => (
    <>
        <div className='sub-header'>
            <Link to='/'>
                <div className='sub-header-link'>Community Feedback</div>
            </Link>
            <div style={{minWidth: '50%', padding: 10}}>
            </div>
        </div>
        <div>
            <button
                className='header-button'
                onClick={Auth.logout}
            >
                Sign Out
            </button>
        </div>
    </>
);
