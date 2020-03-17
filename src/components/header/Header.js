import React from "react";
import {Link} from "react-router-dom";
import './Header.css';
import Button from '@material-ui/core/Button';

export const Header = () => {

    function toggleMenu() {
        const element = document.querySelector('.header');
        const burger = document.querySelector('.burger');
        const cross = document.querySelector('.cross');
        if (window.innerWidth < 813) {
            if (element.style.display === 'none') {
                element.style.display = 'flex';
                burger.style.display = 'none';
                cross.style.display = 'block';
            } else {
                element.style.display = 'none';
                burger.style.display = 'flex';
                cross.style.display = 'flex';
            }
        } else {
            element.style.display = 'flex';
            burger.style.display = 'none';
            cross.style.display = 'none';
        }
    }

    return (
        <>
            <i className="fa fa-bars fa-3x burger" onClick={toggleMenu}>
            </i>
            <div className='header'>
                <i className="fa fa-times fa-3x cross" aria-hidden="true" onClick={toggleMenu}>
                </i>
                <div className='sub-header'>
                    <Link to='/'>
                        <div className='sub-header-link'>Loop</div>
                    </Link>
                </div>
                <div className='sub-header'>
                    <Link to='/products'>
                        <div className='sub-header-link'>Products</div>
                    </Link>
                </div>
                <div className='sub-header'>
                    <Link to='/pricing'>
                        <div className='sub-header-link'>Pricing</div>
                    </Link>
                </div>
                <div className='sub-header'>
                    <Link to='/sign-up'>
                        <Button className='header-button'>
                            Sign Up
                        </Button>
                    </Link>
                </div>
                <div className='sub-header'>
                    <Link to='/sign-in'>
                        <Button className='header-button' style={{backgroundColor: '#039be5', color: 'white'}}>
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};