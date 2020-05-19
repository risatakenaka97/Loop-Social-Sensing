import {SignIn} from "../pages/signIn/SignIn";
import {SignUp} from "../pages/signUp/SignUp";
import {Feedback} from "../pages/app/feedback/Feedback";
import {Upload} from "../pages/app/upload/Upload";
import {Home} from "../pages/app/home/Home";
import {Calendar} from "../pages/app/calendar/Calendar";

export const router = [
    {
        available: true,
        exact: true,
        path: '/sign-in',
        component: SignIn
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
        path: '/upload-meeting-notes',
        component: Upload
    },
    {
        available: false,
        exact: false,
        path: '/feedback-forum',
        component: Feedback
    },
    {
        available: false,
        exact: false,
        path: '/calendar',
        component: Calendar
    },
    {
        available: false,
        exact: true,
        path: '/',
        component: Home
    }
];