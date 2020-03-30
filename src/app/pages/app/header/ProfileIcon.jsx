import React from "react";

export const ProfileIcon = ({toggleProfileHandler, toggleProfile}) => (
    <>
        <svg className='open-profile-icon'
             onClick={toggleProfileHandler}
             width="34"
             height="34"
             viewBox="0 0 34 34"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.8183" cy="17.1816" r="16.8183" fill="black"/>
            <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                <circle cx="16.8183" cy="17.1816" r="16.8183" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
                <path
                    d="M22.3119 8.89122C25.2734 11.8526 25.2734 16.6541 22.3119 19.6155C19.3505 22.5769 14.5491 22.5769 11.5876 19.6155C8.62622 16.6541 8.62622 11.8526 11.5876 8.89122C14.5491 5.92973 19.3505 5.92973 22.3119 8.89122Z"
                    fill="white"/>
                <path
                    d="M28.5826 27.3021C21.6695 22.6311 12.2312 22.6311 5.31814 27.3021C4.29246 27.9946 3.67969 29.1646 3.67969 30.4328V37.0034H30.221V30.4328C30.221 29.1646 29.6082 27.9946 28.5826 27.3021Z"
                    fill="white"/>
            </g>
        </svg>
        {toggleProfile ? (
            <svg className='open-profile-icon' onClick={toggleProfileHandler} width="34" height="34" viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 5}}>
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        ) : (
            <svg className='open-profile-icon' onClick={toggleProfileHandler} width="34" height="34" viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 5}}>
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        )}
    </>
);