import React from "react";
import {Auth} from "../../helpers/auth/Auth";

export const GreetingText = () => (
    <div style={{width: '80%',
        margin: 50}}>
        <div style={{fontSize: 36, fontWeight: 600}}>
            Hello, {Auth.getToken().name || "User"}
        </div>
    </div>
);