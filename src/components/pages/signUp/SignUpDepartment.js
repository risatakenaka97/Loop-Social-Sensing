import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function SignUpDepartment () {

    const [department, setDepartment] = React.useState('');
    const [name, setName] = React.useState('');

    function handleDepartment(event) {
        setDepartment(event.target.value)
    }
    function handleName(event) {
        setName(event.target.value)
    }

    return (
        <form className='wrapper' action="">
            <div className='form-elem-wrapper'>
                <InputLabel htmlFor="department" style={{fontSize: 24, marginRight: 25}}>Department:</InputLabel>
                <Select
                    labelId="department"
                    id="department"
                    value={department}
                    style={{width: 200}}
                    onChange={handleDepartment}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div className='form-elem-wrapper'>
                <InputLabel htmlFor="name" style={{fontSize: 24, marginRight: 25}}>Name:</InputLabel>
                <Select
                    labelId="department"
                    id="department"
                    value={name}
                    onChange={handleName}
                    style={{width: 200}}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div className='form-elem-wrapper'>
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
            <Button className='select-button'>
                Sign In
            </Button>
        </form>
    );
}

export default SignUpDepartment;