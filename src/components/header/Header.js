import React from "react";
import {Link} from "react-router-dom";
import {links} from "../structure/links";

function getLinks() {
    return (
        <>
        {links.map(link => {
            return (
                <Link to={link.to}>
                    <div>{link.label}</div>
                </Link>
            );
        })}
        </>
    );
}

export const Header = () => {
    return (
        <div>
            <div>
                <Link to='/'>
                    <div>Loop</div>
                </Link>
                <Link to='/products'>
                    <div>Products</div>
                </Link>
                <Link to='/pricing'>
                    <div>Pricing</div>
                </Link>
            </div>
            <div>
                <Link to='/sign-in'>
                    <div>Sign In</div>
                </Link>
                <Link to='/sign-up'>
                    <div>Sign Up</div>
                </Link>
            </div>
        </div>
    );
};