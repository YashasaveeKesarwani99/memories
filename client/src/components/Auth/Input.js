import React from 'react';
import { TextField, Grid, InputAdorment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({ half, name, handleChange,label,autoFocus,type,handleShowPassword })=>{
    return(
        <Grid item xs={12} sm={half?6:12}>
            <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autFocus={autoFocus}
            type={type}
            InputProps={name==='password'?{
                endAdornment:(
                    <InputAdorment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type==='password'?<Visibility/>:<VisibilityOff/>}
                        </IconButton>
                    </InputAdorment>
                )
            }:null}
            />
        </Grid>
    )
}

export default Input;