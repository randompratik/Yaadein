import React from 'react'
import { AppBar, Typography, Avatar,Toolbar, Button} from '@material-ui/core'
import Style from "./styles"
import yaadein from "../../images/yaadein.png"
import {Link} from "react-router-dom"
const navbar = () => {
  const classes=Style();
  const user=null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className="brandContainer">
      <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
      Yaadein
    </Typography>
    <img
      className={classes.image}
      src={yaadein}
      alt="yaadein"
      height="60"
    />
      </div>
      <Toolbar className={classes.toolbar} >
        {user?(
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} source={user.result.imageURL}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
              <Button className={classes.logout} variant="contained" color="secondary">Logout</Button>
            </div>

        ):(
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>

        )
        }
      </Toolbar>
   
  </AppBar>
  )
}

export default navbar