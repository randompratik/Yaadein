import React, { useState } from 'react'
import { Avatar, Typography, Grid, Paper, Button, Container } from '@material-ui/core';
import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from "./input"
const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const isSignup = false;
    const handleSubmit = () => {

    };
    const handleChange = () => {

    };
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign-up" : "Sign-in"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid conatiner spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="LastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword} />
                        {isSignup&&   <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? "text":"password"} handleShowPassword={handleShowPassword} /> }
                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth