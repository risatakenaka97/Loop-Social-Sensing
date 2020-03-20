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
    elements = [],
    onChange = () => console.log('select')
                      }) => {
    return (
        <div className={classes.wrapper} style={styles.wrapper}>
            <InputLabel htmlFor={id} style={styles.label}>{label}</InputLabel>
            <MaterialSelect
                labelId={id}
                id={id}
                name={name}
                defaultValue={(elements[0] && elements[0].name) || ''}
                style={styles.select}
                onChange={onChange}
            >
                {elements.map(element => <MenuItem value={element.id}>{element.name}</MenuItem>)}
            </MaterialSelect>
        </div>
    );
};