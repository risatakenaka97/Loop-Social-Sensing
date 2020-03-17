import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import '../../../style.css';

export const SignIn = () => {
    return (
        <div className='wrapper'>
            <div className='header-block'>Welcome Back!</div>
            <div className='select-block'>Choose Your Organization</div>
            <Link to='/sign-in/police-department'>
                <Button className='select-button'>
                    Police Department
                </Button>
            </Link>
            <Link to='/sign-in/community-organization'>
                <Button className='select-button'>
                    Community Organization
                </Button>
            </Link>
            <span className='auth-wrapper'><Link to='/sign-up'>create account</Link></span>
        </div>
    )
};