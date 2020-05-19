import React, {useState} from "react";
import './Header.css';
import {Auth} from "../../../../helpers/auth/Auth";
import {Link, withRouter} from "react-router-dom";
import {ProfileIcon} from "./ProfileIcon";
import {ProfilePopUp} from "./ProfilePopUp";
import {Logo} from "../../../../public/icon/logo";
import {Community} from "./community/Community";
import {Department} from "./Department";

export const Header = withRouter(({location}) => {
    const [toggleProfile, setToggleProfile] = useState(false);

    function toggleProfileHandler() {
        setToggleProfile(!toggleProfile);
    }
    const token = Auth.getToken();

    return (
        <>
            <div className='header'>
                <div className="logo" style={{width: 100, height: 25}}>
                    <Link to='/' className='sub-header-link'>
                        <Logo/>
                    </Link>
                </div>
                {Auth.isAuthorized() ? (
                    <>
                        <div className='sub-header'>
                            {
                                token.organization && token.organization.type === 0 ? (
                                    <Community/>
                                ) : (
                                    <Department/>
                                )
                            }
                        </div>
                        <div className='sub-header'>
                            <Link to='calendar' className='sub-header-link'>
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M8 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M3 10H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <div className='sub-header-link'>
                                <ProfileIcon toggleProfileHandler={toggleProfileHandler} toggleProfile={toggleProfile}/>
                                {
                                    toggleProfile && <ProfilePopUp/>
                                }
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='sub-header'>

                        </div>
                        <div className='sub-header'>
                            {
                                location.pathname === '/sign-in'
                                    ? <Link className='sub-header-link' to={'/sign-up'}>Sign Up</Link>
                                    : <Link className='sub-header-link' to={'/sign-in'}>Sign In</Link>
                            }

                        </div>
                    </>
                )}
            </div>
        </>
    )
});