import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import '../../../style.css';

export const SignUp = () => {
    return (
        <div className='wrapper'>
            <div className='header-block'>Get Started With Your Account</div>
            <div className='select-block'>Choose Your Organization</div>
            <Link to='/sign-up/police-department'>
                <Button className='select-button'>
                    Police Department
                </Button>
            </Link>
            <Link to='/sign-up/community-organization'>
                <Button className='select-button'>
                    Community Organization
                </Button>
            </Link>
            <span className='auth-wrapper'><Link to='/sign-in'>sign in</Link></span>
        </div>
    );
};