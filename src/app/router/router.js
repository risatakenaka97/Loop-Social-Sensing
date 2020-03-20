import {SignInOrganization} from "../pages/signIn/SignInOrganization";
import {SignInDepartment} from "../pages/signIn/SignInDepartment";
import {SignIn} from "../pages/signIn/SignIn";
import {SignUp} from "../pages/signUp/SignUp";
import {SignUpOrganization} from "../pages/signUp/SignUpOrganization";
import {SignUpDepartment} from "../pages/signUp/SignUpDepartment";
import {SignUpOrganizationCreate} from "../pages/signUp/SignUpOrganizationCreate";
import {Feedback} from "../pages/app/feedback/Feedback";
import {Notes} from "../pages/app/notes/Notes";
import {Incident} from "../pages/app/incident/Incident";
import {Policy} from "../pages/app/policy/Policy";
import {General} from "../pages/app/general/General";
import {Upload} from "../pages/app/upload/Upload";
import {SignUpDepartmentCreate} from "../pages/signUp/SignUpDepartmentCreate";

export const router = [
    {
        available: true,
        exact: false,
        path: '/sign-in/police-department',
        component: SignInDepartment
    },
    {
        available: true,
        exact: false,
        path: '/sign-in/community-organization',
        component: SignInOrganization
    },
    {
        available: true,
        exact: true,
        path: '/sign-in',
        component: SignIn
    },
    {
        available: true,
        exact: false,
        path: '/sign-up/community-organization/create',
        component: SignUpOrganizationCreate
    },
    {
        available: true,
        exact: false,
        path: '/sign-up/community-organization',
        component: SignUpOrganization
    },
    {
        available: true,
        exact: false,
        path: '/sign-up/police-department/create',
        component: SignUpDepartmentCreate
    },
    {
        available: true,
        exact: false,
        path: '/sign-up/police-department',
        component: SignUpDepartment
    },
    {
        available: true,
        exact: false,
        path: '/sign-up',
        component: SignUp
    },
    {
        available: false,
        exact: false,
        path: '/meeting-notes',
        component: Notes
    },
    {
        available: false,
        exact: false,
        path: '/incident',
        component: Incident
    },
    {
        available: false,
        exact: false,
        path: '/policy',
        component: Policy
    },
    {
        available: false,
        exact: false,
        path: '/general',
        component: General
    },
    {
        available: false,
        exact: false,
        path: '/incident',
        component: Incident
    },
    {
        available: false,
        exact: false,
        path: '/upload-meeting-notes',
        component: Upload
    },
    {
        available: false,
        exact: true,
        path: '/',
        component: Feedback
    }
];