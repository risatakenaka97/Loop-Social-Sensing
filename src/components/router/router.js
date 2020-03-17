import {Loop} from "../pages/Loop";
import {Products} from "../pages/Products";
import {Pricing} from "../pages/Pricing";
import {SignIn} from "../pages/SignIn";
import {SignUp} from "../pages/SignUp";

export const routing = [
    {
        exact: true,
        path: '/',
        component: Loop
    },
    {
        exact: false,
        path: '/products',
        component: Products
    },
    {
        exact: false,
        path: '/pricing',
        component: Pricing
    },
    {
        exact: false,
        path: '/sign-in',
        component: SignIn
    },
    {
        exact: false,
        path: '/sign-up',
        component: SignUp
    }
];