import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import '../../../style.css';
import {Select} from "../../components/Select";
import {Input} from "../../components/Input";
import {PopUp} from "../popUp/PopUp";
import {useInputs} from "../../../helpers/hooks/useInputs";
import {host} from "../../../helpers/const/uri";
import {Link} from "react-router-dom";

export const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [departments, setDepartments] = useState([]);
    const {
        inputs,
        handleSubmit,
        handleInput
    } = useInputs(signUp);

    function handleClose() {
        setSuccess(false);
        window.location.pathname = '/sign-in';
    }

    async function signUp(data) {
        const abortController = new AbortController();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const response = await fetch(`${host}/auth/sign-up`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            signal: abortController.signal
        });
        if (response.status === 200) {
            setSuccess(true);
        } else {
            const body = await response.json();
            console.log(body);
        }
    }

    useEffect(() => {
        const abortController = new AbortController();

        async function getDepartments() {
            const response = await fetch(`${host}/api/organization`, {
                method: "GET",
                signal: abortController.signal
            });
            const body = await response.json();
            setDepartments(body);
        }

        getDepartments();
        return () => {
            abortController.abort()
        }
    }, []);

    console.log("signUp inputs: ", inputs);
    return (
        <>
            <div className='authorization-wrapper'>
                <div className='header-block'>Sign Up</div>
                <div className='select-block'>Welcome! Please fill the form to get started</div>
                <form className='wrapper' onSubmit={handleSubmit} autoComplete="off">
                    <Input
                        classes={{
                            wrapper: 'form-elem-wrapper sign-up-form-elem'
                        }}
                        styles={{
                            label: {fontSize: 14},
                        }}
                        id={'firstName'}
                        label={'First Name:'}
                        name={'firstName'}
                        value={inputs.firstName || ''}
                        type={'text'}
                        required={true}
                        onChange={handleInput}
                    />
                    <Input
                        classes={{
                            wrapper: 'form-elem-wrapper sign-up-form-elem'
                        }}
                        styles={{
                            label: {fontSize: 14},
                        }}
                        id={'lastName'}
                        label={'Last Name:'}
                        name={'lastName'}
                        value={inputs.lastName || ''}
                        type={'text'}
                        required={true}
                        onChange={handleInput}
                    />
                    <Select
                        classes={{
                            wrapper: 'form-elem-wrapper sign-up-form-elem'
                        }}
                        styles={{
                            label: {fontSize: 14}
                        }}
                        id={'department'}
                        label={'Department:'}
                        name={'organization_id'}
                        value={inputs.organization || ''}
                        elements={departments}
                        onChange={handleInput}
                    />
                    <Input
                        classes={{
                            wrapper: 'form-elem-wrapper sign-up-form-elem'
                        }}
                        styles={{
                            label: {fontSize: 14},
                        }}
                        id={'email'}
                        label={'Email:'}
                        name={'email'}
                        value={inputs.email || ''}
                        type={'email'}
                        required={true}
                        onChange={handleInput}
                    />
                    <Input
                        classes={{
                            wrapper: 'form-elem-wrapper sign-up-form-elem'
                        }}
                        styles={{
                            label: {fontSize: 14},
                        }}
                        id={'password'}
                        label={'Password:'}
                        name={'password'}
                        type={'password'}
                        required={true}
                        onChange={handleInput}
                    />
                    <Input
                        classes={{
                            wrapper: 'form-elem-wrapper sign-up-form-elem'
                        }}
                        styles={{
                            label: {fontSize: 14}
                        }}
                        id={'password_confirmation'}
                        label={'Confirm-password:'}
                        name={'password_confirmation'}
                        type={'password'}
                        required={true}
                        onChange={handleInput}
                    />
                    <div>
                        <Button className='select-button' type='submit'>
                            Create Account
                        </Button>
                        <div className='auth-wrapper'>Already have an account? <Link to='/sign-in' style={{fontSize: 14}}>Sign in</Link></div>
                    </div>
                </form>
            </div>
            {
                success && <PopUp
                    onClick={handleClose}
                    header={'Thank You!'}
                    text={'You will receive an email when your group administrator verifies your account'}
                />
            }
        </>
    )
};