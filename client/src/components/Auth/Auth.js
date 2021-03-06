import React from 'react'
import { Avatar,Button, Paper,Grid, Typography,Container,TextField } from '@material-ui/core';
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input';


const Auth = ()=>{
    const isSignup = false;
    const classes = useStyles();

    const handleSubmit = ()=>{}

    const handleChange = ()=>{

    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">
                    {isSignup?'Sign Up':'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {

                                isSignup && (
                                    <>
                                    
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>
                                    
                                    
                                    <Input name="firstName" label="First Name" handleChange={handleChange} xs={6}/>
                                    
                                    </>
                                )

                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth