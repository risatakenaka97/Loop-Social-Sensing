import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import {Select as MaterialSelect} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

export const Select = ({
    classes,
    styles,
    id,
    name,
    label,
    value,
    onChange,
    elements,
                      }) => {
    return (
        <div className={classes.wrapper} style={styles.wrapper}>
            <InputLabel htmlFor={id} style={styles.label}>{label}</InputLabel>
            <MaterialSelect
                labelId={id}
                id={id}
                name={name}
                defaultValue={"Choose your option"}
                value={value.name}
                style={styles.select}
                onChange={onChange}
            >
                {/*<option value="" disabled>Choose your option</option>*/}
                {elements.map(element => <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>)}
            </MaterialSelect>
        </div>
    );
};