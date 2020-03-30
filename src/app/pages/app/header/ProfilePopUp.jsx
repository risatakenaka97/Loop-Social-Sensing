import React from "react";
import {Link} from "react-router-dom";

export const ProfilePopUp = () => (
    <div className='profile-settings-wrapper'>
        <Link to='' className='sub-header-link'>
            <div className='profile-settings-item'>Profile</div>
        </Link>
        <Link to='' className='sub-header-link'>
            <div className='profile-settings-item'>Sign-Out</div>
        </Link>
    </div>
);