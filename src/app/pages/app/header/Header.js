import React from "react";
import {Community} from "./community/Community";
import {Department} from "./Department";
import './Header.css';
const type = 1;
export const Header = () => (
    <>
        <div className='header'>
            {
                type ? <Community/> : <Department/>
            }
        </div>
    </>
);