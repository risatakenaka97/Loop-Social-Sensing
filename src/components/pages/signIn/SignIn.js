import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export const SignIn = () => {
    return (
        <div>
            <div>Welcome Back!</div>
            <div>Choose Your Organization</div>
            <Link to='/sign-in/police-department'><Button>Police Department</Button></Link>
            <Link to='/sign-in/community-organization'><Button>Community Organization</Button></Link>
        </div>
    )
};