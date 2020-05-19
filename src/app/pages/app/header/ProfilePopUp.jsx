import React from "react";
import {Link} from "react-router-dom";
import {Auth} from "../../../../helpers/auth/Auth";

export const ProfilePopUp = () => (
    <div className='profile-settings-wrapper'>
        <Link to='' className='sub-header-link'>
            <div className='profile-settings-item'>Profile</div>
        </Link>
        <div className='sub-header-link' onClick={() => {
            Auth.logout();
            window.location.reload();
        }}>
            <div className='profile-settings-item'>Sign-Out</div>
        </div>
    </div>
);