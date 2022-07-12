import React, { useState } from 'react'
import { Avatar, Typography, Grid, Paper, Button, Container } from '@material-ui/core';
import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from "./input"
import {signin,signup} from "../../actions/auth";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
const Auth = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)

    const initialState={firstName:'',lasrName:'',email:'',password:'',confirmPassword:''};
    const [formData, setFormData]=useState(initialState);
    
    const dispatch=useDispatch();
    const history=useHistory();

    const handleSubmit = (e) => {
          e.preventDefault();
            if(isSignup){
                dispatch(signup(formData,history));
            }
            else
            dispatch(signin(formData,history))

    };
    const handleChange = (e) => {
          setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchMode = () => {
        setIsSignup((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    };
    
   
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign-up" : "Sign-in"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="LastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type="password" />}
                    </Grid>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign in"}
                    </Button>
                    
                   
                    
                   
                    <Grid container justifyContent="flex-end">
                        <Grid item >
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an account? Sign In" : "Dont have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>

        </Container>
    )
}

export default Auth