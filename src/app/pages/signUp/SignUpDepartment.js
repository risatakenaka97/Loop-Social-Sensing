import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {PopUp} from "../popUp/PopUp";
import {Link} from "react-router-dom";
import {Input} from "../../components/Input";
import {Select} from "../../components/Select";

export const SignUpDepartment = () => {
    const [success, setSuccess] = useState(false);

    function handleClose() {
        setSuccess(false);
    }

    return (
        <>
            <form className='wrapper' autoComplete="off">
                <Input
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        input: {width: 200}
                    }}
                    id={'name'}
                    label={'Name:'}
                    name={'name'}
                    type={'text'}
                    required={true}
                />
                <Input
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        input: {width: 200}
                    }}
                    id={'email'}
                    label={'Email:'}
                    name={'email'}
                    type={'email'}
                    required={true}
                />
                <Input
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        input: {width: 200}
                    }}
                    id={'city'}
                    label={'City:'}
                    name={'city'}
                    type={'text'}
                    required={true}
                />
                <Select
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        select: {width: 200}
                    }}
                    id={'department'}
                    label={'Department:'}
                    name={'department'}
                    elements={[]}
                    onChange={null}
                />
                <Input
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        input: {width: 200}
                    }}
                    id={'precinct'}
                    label={'Precinct:'}
                    name={'precinct'}
                    type={'text'}
                    required={true}
                />
                <Input
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        input: {width: 200}
                    }}
                    id={'password'}
                    label={'Password:'}
                    name={'password'}
                    type={'password'}
                    required={true}
                />
                <Input
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        input: {width: 200}
                    }}
                    id={'password_confirmation'}
                    label={'Confirm-password:'}
                    name={'password_confirmation'}
                    type={'password'}
                    required={true}
                />
                <Button className='select-button' type='submit'>
                    Create Account
                </Button>
                <span className='auth-wrapper'>
                <Link to='/sign-up/police-department/create'>
                    Don`t see your department?
                </Link>
            </span>
            </form>
            {
                success && <PopUp
                    onClick={handleClose}
                    header={'Thank You!'}
                    text={'You will receive an email when your group administrator verifies your account'}
                />
            }
        </>
    );
};
