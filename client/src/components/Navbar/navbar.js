import React, {useState , useEffect} from "react";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import Style from "./styles";
import yaadein from "../../images/yaadein.png";
import { Link ,useLocation } from "react-router-dom";
const Navbar = () => {
  const classes = Style();

const location =useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(()=>{
       setUser(JSON.parse(localStorage.getItem('profile')));
    },[location,user]);
  
    const dispatch=useDispatch();
    const history=useHistory();
const logout=()=>{
    dispatch({type:"LOGOUT"});
    history.push('/');
    setUser(null);
}

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className="brandContainer">
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Yaadein
        </Typography>
        <img
          className={classes.image}
          src={yaadein}
          alt="yaadein"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              source={user.result.imageURL}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
