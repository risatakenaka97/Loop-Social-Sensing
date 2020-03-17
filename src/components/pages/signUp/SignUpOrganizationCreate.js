import React, {useState} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {PopUp} from "../popUp/PopUp";

export const SignUpOrganizationCreate = () => {
    const [success, setSuccess] = useState(false);


    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit");
        setTimeout(() => setSuccess(true), 1000);
    }
    function handleClose() {
        setSuccess(false);
    }
    return (
        <>
        <form className='wrapper' action="" onSubmit={handleSubmit} autoComplete="off">
            <div className='form-elem-wrapper sign-up-form-elem'>
                <InputLabel htmlFor="organization" style={{fontSize: 24, marginRight: 25}}>Organization:</InputLabel>
                <Input
                    id="organization"
                    name='organization'
                    type='text'
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <div className='form-elem-wrapper sign-up-form-elem'>
                <InputLabel htmlFor="group-administrator" style={{fontSize: 24, marginRight: 25}}>Group Administrator:</InputLabel>
                <Input
                    id="group-administrator"
                    name='group-administrator'
                    type='text'
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <div className='form-elem-wrapper sign-up-form-elem'>
                <InputLabel htmlFor="email" style={{fontSize: 24, marginRight: 25}}>Email:</InputLabel>
                <Input
                    id="email"
                    name='email'
                    type='email'
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <div className='form-elem-wrapper sign-up-form-elem'>
                <InputLabel htmlFor="city" style={{fontSize: 24, marginRight: 25}}>City:</InputLabel>
                <Input
                    id="city"
                    name="city"
                    type='text'
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <div className='form-elem-wrapper sign-up-form-elem'>
                <InputLabel htmlFor="organization-website" style={{fontSize: 24, marginRight: 25}}>Organization Website:</InputLabel>
                <Input
                    id="organization-website"
                    name="organization-website"
                    type='text'
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <div className='form-elem-wrapper sign-up-form-elem'>
                <InputLabel htmlFor="password" style={{fontSize: 24, marginRight: 25}}>Password:</InputLabel>
                <Input
                    id="password"
                    name='password'
                    type='password'
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <div className='form-elem-wrapper sign-up-form-elem'>
                <InputLabel
                    htmlFor="confirm-password"
                    style={{fontSize: 24, marginRight: 25}}>Confirm-password:</InputLabel>
                <Input
                    error={true}
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <Button className='select-button' type='submit'>
                Submit
            </Button>
        </form>
            { success && <PopUp onClick={handleClose} header={'Thank You!'} text={'You will receive an email from Loop with additional steps to verifying your organization'}/>}
        </>
    );
};