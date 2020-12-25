import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ label, value, onChange}) => {
    return (
        <TextField label={label} value={value} onChange={onChange}/>
    )
}

export default Input;