import React from "react";
import {Community} from "./Community";
import {Department} from "./Department";
import './Header.css';
const type = 0;
export const Header = () => (
    <>
        <div className='header'>
            {
                type ? <Community/> : <Department/>
            }
        </div>
        <div className="line">
        </div>
    </>
);