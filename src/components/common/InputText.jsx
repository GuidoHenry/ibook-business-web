import { TextField } from '@mui/material'
import React from 'react'

const InputText = (props,{id, required, label, defaultValue, value, type,name, className, fullWidth, autoComplete}) => {
  return (
    <TextField
        required={required}
        id={id}
        label={label}
        defaultValue={defaultValue}
        value={value}
        type={type}
        name={name}
        className={className}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        {...props}
    />
  )
}

export default InputText