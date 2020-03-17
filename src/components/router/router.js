import React from "react";
import {SignInOrganization} from "../pages/signIn/SignInOrganization";
import SignInDepartment from "../pages/signIn/SignInDepartment";
import {SignIn} from "../pages/signIn/SignIn";
import {SignUp} from "../pages/signUp/SignUp";
import {SignUpOrganization} from "../pages/signUp/SignUpOrganization";
import {SignUpDepartment} from "../pages/signUp/SignUpDepartment";
import {SignUpOrganizationCreate} from "../pages/signUp/SignUpOrganizationCreate";

export const router = [
    {
        exact: true,
        path: '/sign-in',
        component: <SignIn/>
    },
    {
        exact: false,
        path: '/sign-in/police-department',
        component: <SignInDepartment/>
    },
    {
        exact: false,
        path: '/sign-in/community-organization',
        component: <SignInOrganization/>
    },
    {
        exact: false,
        path: '/sign-up/community-organization/create',
        component: <SignUpOrganizationCreate/>
    },
    {
        exact: false,
        path: '/sign-up/community-organization',
        component: <SignUpOrganization/>
    },
    {
        exact: false,
        path: '/sign-up/police-department',
        component: <SignUpDepartment/>
    },
    {
        exact: false,
        path: '/sign-up',
        component: <SignUp/>
    }
];