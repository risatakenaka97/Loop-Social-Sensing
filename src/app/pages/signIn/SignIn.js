import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import '../../../style.css';
import {Input} from "../../components/Input";
import {useInputs} from "../../../helpers/hooks/useInputs";
import {Auth} from "../../../helpers/auth/Auth";
import {host} from "../../../helpers/const/uri";
import {PopUp} from "../popUp/PopUp";

export const SignIn = () => {
    const {
        handleSubmit,
        handleInput,
        inputs
    } = useInputs(signIn);
    const [notApprovedUser, setNotApprovedUser] = useState(false);
    const history = useHistory();

    function handleCloseNotApprovedUserPopUp()
    {
        setNotApprovedUser(false);
    }

    async function signIn(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const response = await fetch(`${host}/auth/sign-in`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            const body = await response.json();
            Auth.setToken(body);
            console.log("body: ", body);
            // window.location.pathname = '/';
            history.push('/');
        } else {
            const body = await response.json();
            setNotApprovedUser(true);
            console.log(body);
        }
    }
    return (
        <>
            <div className='authorization-wrapper'>
                <div className='header-block'>Sign In</div>
                <div className='select-block'>Welcome back! Please sign in to your account</div>
                <form className='wrapper' onSubmit={handleSubmit} autoComplete="off">
                    <Input
                        classes={{
                            wrapper: 'form-elem-wrapper',
                        }}
                        styles={{
                            label: {fontSize: 14},

                        }}
                        label={'Email:'}
                        id={'email'}
                        name={'email'}
                        type={'email'}
                        required={true}
                        value={inputs.email || ''}
                        onChange={handleInput}
                    />
                    <Input
                        classes={{
                            wrapper: 'form-elem-wrapper',
                        }}
                        styles={{
                            label: {fontSize: 14},
                        }}
                        label={'Password:'}
                        id={'password'}
                        name={'password'}
                        type={'password'}
                        required={true}
                        value={inputs.password || ''}
                        onChange={handleInput}
                    />
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <Button className='select-button' type='submit'>
                            Sign In
                        </Button>
                        <div className='auth-wrapper'>Don’t remember your password? <Link to='/sign-in' style={{fontSize: 14}}>Reset Password</Link></div>
                    </div>
                </form>
            </div>
            {notApprovedUser && <PopUp
                onClick={handleCloseNotApprovedUserPopUp}
                header={'Sorry!'}
                text={'but you need to be verified by your group administrator.'}
            />}
        </>
    )
};