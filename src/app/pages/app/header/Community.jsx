import React from "react";
import {Link} from "react-router-dom";
import {Auth} from "../../../../helpers/auth/Auth";

export const Community = () => (
    <>
        <div className='sub-header'>
            <Link to='/' className='sub-header-link'>
                <div>Feedback Forum</div>
            </Link>
            <Link to='/meeting-notes' className='sub-header-link'>
                <div>Meeting Notes</div>
            </Link>
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