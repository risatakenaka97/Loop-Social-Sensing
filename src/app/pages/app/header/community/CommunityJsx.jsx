import React from "react";
import {Link} from "react-router-dom";
import {Auth} from "../../../../../helpers/auth/Auth";
// import {Link} from "react-router-dom";
// import {ProfilePopUp} from "../ProfilePopUp";
// import {ProfileIcon} from "../ProfileIcon";
// import {Auth} from "../../../../../helpers/auth/Auth";

export const CommunityJsx = ({toggleProfileHandler, toggleProfile}) => (
    <>
        <Link to='/feedback-forum' className='sub-header-link'>
            <div>Community Feedback</div>
        </Link>
        <Link to='/meeting-notes' className='sub-header-link'>
            <div>Police Responses</div>
        </Link>
        {
            Auth.getToken().admin && (
                <Link to='/community-members' className='sub-header-link'>
                    <div>Community Members</div>
                </Link>
            )
        }
    </>
);