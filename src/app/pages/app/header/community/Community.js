import React, {useState} from "react";
import {CommunityJsx} from './CommunityJsx';

export const Community = () => {
    const [toggleProfile, setToggleProfile] = useState(false);

    function toggleProfileHandler() {
        setToggleProfile(!toggleProfile);
    }

    return <CommunityJsx toggleProfileHandler={toggleProfileHandler} toggleProfile={toggleProfile}/>
};