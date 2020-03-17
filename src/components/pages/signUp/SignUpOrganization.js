import React, {useState} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {PopUp} from "../popUp/PopUp";

export const SignUpOrganization = () => {
    const [organization, setOrganization] = useState('');
    const [success, setSuccess] = useState(false);
    function handleOrganization(event) {
        setOrganization(event.target.value)
    }
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
                <InputLabel htmlFor="name" style={{fontSize: 24, marginRight: 25}}>Name:</InputLabel>
                <Input
                    id="name"
                    name='name'
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
                <InputLabel htmlFor="organization" style={{fontSize: 24, marginRight: 25}}>Organization:</InputLabel>
                <Select
                    labelId="organization"
                    id="organization"
                    value={organization}
                    style={{width: 200}}
                    onChange={handleOrganization}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
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
                <InputLabel htmlFor="precinct" style={{fontSize: 24, marginRight: 25}}>Precinct:</InputLabel>
                <Input
                    id="precinct"
                    name="precinct"
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
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    disableUnderline={true}
                    style={{width: 200}}
                />
            </div>
            <Button className='select-button' type='submit'>
                Create Account
            </Button>
            <span className='auth-wrapper'>
                <Link to='/sign-up/community-organization/create'>
                    Don`t see your organization?
                </Link>
            </span>
        </form>
            { success && <PopUp onClick={handleClose} header={'Thank You!'} text={'You will receive an email when your group administrator verifies your account'}/>}
        </>
    );
};