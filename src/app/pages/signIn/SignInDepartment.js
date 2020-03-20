import React from "react";
import Button from "@material-ui/core/Button";
import {Select} from "../../components/Select";
import {Input} from "../../components/Input";

export function SignInDepartment () {

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit")
    }

    return (
        <form className='wrapper' onSubmit={handleSubmit} autoComplete="off">
            <Select
                classes={{
                    wrapper: 'form-elem-wrapper',
                }}
                styles={{
                    wrapper: {width: 400},
                    label: {fontSize: 24, marginRight: 25},
                    select: {width: 200}
                }}
                id={"department"}
                name={"department"}
                elements={[]}
                label={"Department:"}
            />
            <Select
                classes={{
                    wrapper: 'form-elem-wrapper',
                }}
                styles={{
                    wrapper: {width: 400},
                    label: {fontSize: 24, marginRight: 25},
                    select: {width: 200}
                }}
                id={"name"}
                name={"name"}
                elements={[]}
                label={'Name:'}
            />
            <Input
                classes={{
                    wrapper: 'form-elem-wrapper',
                }}
                styles={{
                    wrapper: {width: 400},
                    label: {fontSize: 24, marginRight: 25},
                    input: {width: 200}
                }}
                label={'Password:'}
                id={'password'}
                name={'password'}
                type={'password'}
                required={true}
                value={''}
            />
            <Button className='select-button' type='submit'>
                Sign In
            </Button>
        </form>
    );
}