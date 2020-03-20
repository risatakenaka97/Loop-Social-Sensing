import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import {Input as MaterialInput} from "@material-ui/core";

export const Input = ({
    classes,
    styles,
    id,
    label,
    name,
    type,
    value,
    onChange,
    required = false
                      }) => {
    return (
        <div className={classes.wrapper} style={styles.wrapper}>
            <InputLabel htmlFor={id} style={{fontSize: 24, marginRight: 25}}>{label}</InputLabel>
            <MaterialInput
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                disableUnderline={true}
                style={styles.input}
            />
        </div>
    );
};