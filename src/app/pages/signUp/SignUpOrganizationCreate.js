import React from "react";
import Button from "@material-ui/core/Button";
import {PopUp} from "../popUp/PopUp";
import {useForm} from "../../../helpers/hooks/useForm";
import {Input} from "../../components/Input";

export const SignUpOrganizationCreate = () => {
    const {success, togglePopUp} = useForm();

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
                    label={'Organization:'}
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
                    id={'user_name'}
                    label={'Group Administrator:'}
                    name={'user_name'}
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
                    id={'user_email'}
                    label={'Email:'}
                    name={'user_email'}
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
                    id={'user_city'}
                    label={'City:'}
                    name={'user_city'}
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
                    id={'user_precinct'}
                    label={'Precinct:'}
                    name={'user_precinct'}
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
                    id={'website'}
                    label={'Organization Website:'}
                    name={'website'}
                    type={'text'}
                />
                <Input
                    classes={{
                        wrapper: 'form-elem-wrapper sign-up-form-elem'
                    }}
                    styles={{
                        label: {fontSize: 24, marginRight: 25},
                        input: {width: 200}
                    }}
                    id={'user_password'}
                    label={'Password:'}
                    name={'user_password'}
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
                    id={'user_password_confirmation'}
                    label={'Confirm-password:'}
                    name={'user_password_confirmation'}
                    type={'password'}
                    required={true}
                />
                <Button className='select-button' type='submit'>
                    Submit
                </Button>
            </form>
            {
                success && <PopUp
                    onClick={togglePopUp}
                    header={'Thank You!'}
                    text={'You will receive an email from Loop with additional steps to verifying your organization'}
                />
            }
        </>
    );
};